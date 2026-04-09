'use client'

import { useState, FormEvent } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'

interface FormData {
  name: string
  furigana: string
  age: string
  gender: string
  phone: string
  email: string
  date1: string
  time1: string
  date2: string
  time2: string
  date3: string
  time3: string
  trial: string
  trainer_preference: string
  message: string
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    furigana: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    date1: '',
    time1: '',
    date2: '',
    time2: '',
    date3: '',
    time3: '',
    trial: '',
    trainer_preference: '',
    message: '',
  })

  const timeSlots = [
    '10:00〜12:00',
    '12:00〜14:00',
    '14:00〜16:00',
    '16:00〜18:00',
    '18:00〜20:00',
    '20:00〜22:00',
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowConfirmModal(true)
  }

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true)
    setShowConfirmModal(false)

    try {
      const submitData = new FormData()
      submitData.append('_subject', '【Body Sizing】無料カウンセリング申込')
      submitData.append('_captcha', 'false')
      
      Object.entries(formData).forEach(([key, value]) => {
        if (value) submitData.append(key, value)
      })

      const response = await fetch('https://formspree.io/f/xjgpwbzr', {
        method: 'POST',
        body: submitData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setIsSuccess(true)
        
        // ==============================================
        // GA4 コンバージョン計測用イベント発火ポイント
        // Google Tag Manager または gtag.js が設定されている場合、
        // 以下のコメントを解除してイベントを発火させてください。
        // ==============================================
        // if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        //   window.gtag('event', 'form_submission_success', {
        //     'event_category': 'Lead',
        //     'event_label': 'Contact Form',
        //     'value': 1
        //   });
        // }
        // ==============================================
      } else {
        alert('送信に失敗しました。もう一度お試しください。')
      }
    } catch {
      alert('送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }

  return (
    <div className="bg-card rounded-xl p-5 md:p-8 border border-border">
      <h3 className="font-semibold mb-6 text-center text-lg">メールフォームで予約</h3>
      {isSuccess ? (
        <div className="text-center py-10">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <Send className="h-7 w-7 text-accent" />
          </div>
          <h3 className="text-lg font-semibold mb-2">
            送信が完了しました。ありがとうございます。
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            bodysizing@fitnext.co.jp より、<br className="sm:hidden" />通常24時間以内にご連絡いたします。
          </p>
        </div>
      ) : (
        <>
          <form 
            onSubmit={handleFormSubmit}
            className="space-y-5"
          >
            {/* お名前 */}
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm">お名前 <span className="text-destructive">*必須</span></Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="山田 太郎"
                className="h-11"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* フリガナ */}
            <div className="space-y-1.5">
              <Label htmlFor="furigana" className="text-sm">フリガナ <span className="text-destructive">*必須</span></Label>
              <Input
                id="furigana"
                name="furigana"
                required
                placeholder="ヤマダ タロウ"
                className="h-11"
                value={formData.furigana}
                onChange={handleInputChange}
              />
            </div>

            {/* 年齢・性別 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="age" className="text-sm">年齢（歳）</Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  min="10"
                  max="100"
                  placeholder="30"
                  className="h-11"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="gender" className="text-sm">性別</Label>
                <select
                  id="gender"
                  name="gender"
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="">選択してください</option>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
                  <option value="その他">その他</option>
                </select>
              </div>
            </div>

            {/* 電話番号 */}
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-sm">電話番号 <span className="text-destructive">*必須</span></Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="090-1234-5678"
                className="h-11"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* メールアドレス */}
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-sm">メールアドレス <span className="text-destructive">*必須</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@email.com"
                className="h-11"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* ご希望の来店日時 */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">ご希望の来店日時</Label>
              
              {/* 第1希望日 */}
              <div className="space-y-1.5 pl-3 border-l-2 border-accent">
                <Label htmlFor="date1" className="text-sm text-muted-foreground">第1希望日</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="date1"
                    name="date1"
                    type="date"
                    className="h-11"
                    value={formData.date1}
                    onChange={handleInputChange}
                  />
                  <select
                    id="time1"
                    name="time1"
                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.time1}
                    onChange={handleInputChange}
                  >
                    <option value="">時間帯を選択</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 第2希望日 */}
              <div className="space-y-1.5 pl-3 border-l-2 border-border">
                <Label htmlFor="date2" className="text-sm text-muted-foreground">第2希望日</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="date2"
                    name="date2"
                    type="date"
                    className="h-11"
                    value={formData.date2}
                    onChange={handleInputChange}
                  />
                  <select
                    id="time2"
                    name="time2"
                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.time2}
                    onChange={handleInputChange}
                  >
                    <option value="">時間帯を選択</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 第3希望日 */}
              <div className="space-y-1.5 pl-3 border-l-2 border-border">
                <Label htmlFor="date3" className="text-sm text-muted-foreground">第3希望日</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    id="date3"
                    name="date3"
                    type="date"
                    className="h-11"
                    value={formData.date3}
                    onChange={handleInputChange}
                  />
                  <select
                    id="time3"
                    name="time3"
                    className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={formData.time3}
                    onChange={handleInputChange}
                  >
                    <option value="">時間帯を選択</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 体験トレーニング希望 */}
            <div className="space-y-1.5">
              <Label className="text-sm">体験トレーニング希望</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="trial"
                    value="はい"
                    className="w-4 h-4 text-accent border-input focus:ring-accent"
                    checked={formData.trial === 'はい'}
                    onChange={() => handleRadioChange('trial', 'はい')}
                  />
                  <span className="text-sm">はい</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="trial"
                    value="いいえ"
                    className="w-4 h-4 text-accent border-input focus:ring-accent"
                    checked={formData.trial === 'いいえ'}
                    onChange={() => handleRadioChange('trial', 'いいえ')}
                  />
                  <span className="text-sm">いいえ</span>
                </label>
              </div>
            </div>

            {/* トレーナー希望 */}
            <div className="space-y-1.5">
              <Label className="text-sm">トレーナー希望</Label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="trainer_preference"
                    value="男性"
                    className="w-4 h-4 text-accent border-input focus:ring-accent"
                    checked={formData.trainer_preference === '男性'}
                    onChange={() => handleRadioChange('trainer_preference', '男性')}
                  />
                  <span className="text-sm">男性</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="trainer_preference"
                    value="女性"
                    className="w-4 h-4 text-accent border-input focus:ring-accent"
                    checked={formData.trainer_preference === '女性'}
                    onChange={() => handleRadioChange('trainer_preference', '女性')}
                  />
                  <span className="text-sm">女性</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="trainer_preference"
                    value="どちらでも可"
                    className="w-4 h-4 text-accent border-input focus:ring-accent"
                    checked={formData.trainer_preference === 'どちらでも可'}
                    onChange={() => handleRadioChange('trainer_preference', 'どちらでも可')}
                  />
                  <span className="text-sm">どちらでも可</span>
                </label>
              </div>
            </div>

            {/* お問い合わせ内容 */}
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-sm">お問い合わせ内容（ご質問など）</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="気になることやご要望があればお書きください"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-7"
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : '送信する'}
              <Send className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              送信いただいた情報は、お問い合わせへの回答以外には使用いたしません。
            </p>
          </form>

          {/* 入力内容確認モーダル */}
          <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>入力内容の確認</DialogTitle>
                <DialogDescription>
                  以下の内容で送信します。よろしいですか？
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-3 text-sm py-4">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-muted-foreground">お名前</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-muted-foreground">フリガナ</span>
                  <span className="font-medium">{formData.furigana}</span>
                </div>
                {formData.age && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">年齢</span>
                    <span className="font-medium">{formData.age}歳</span>
                  </div>
                )}
                {formData.gender && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">性別</span>
                    <span className="font-medium">{formData.gender}</span>
                  </div>
                )}
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-muted-foreground">電話番号</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="text-muted-foreground">メール</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                {(formData.date1 || formData.time1) && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">第1希望日</span>
                    <span className="font-medium">
                      {formatDate(formData.date1)} {formData.time1}
                    </span>
                  </div>
                )}
                {(formData.date2 || formData.time2) && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">第2希望日</span>
                    <span className="font-medium">
                      {formatDate(formData.date2)} {formData.time2}
                    </span>
                  </div>
                )}
                {(formData.date3 || formData.time3) && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">第3希望日</span>
                    <span className="font-medium">
                      {formatDate(formData.date3)} {formData.time3}
                    </span>
                  </div>
                )}
                {formData.trial && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">体験希望</span>
                    <span className="font-medium">{formData.trial}</span>
                  </div>
                )}
                {formData.trainer_preference && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">トレーナー</span>
                    <span className="font-medium">{formData.trainer_preference}</span>
                  </div>
                )}
                {formData.message && (
                  <div className="grid grid-cols-[100px_1fr] gap-2">
                    <span className="text-muted-foreground">お問い合わせ</span>
                    <span className="font-medium whitespace-pre-wrap">{formData.message}</span>
                  </div>
                )}
              </div>

              <DialogFooter className="gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmModal(false)}
                  disabled={isSubmitting}
                >
                  修正する
                </Button>
                <Button
                  onClick={handleConfirmSubmit}
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-3 mb-4 text-balance">
            無料カウンセリング予約
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            まずはお気軽にご相談ください。あなたの目標やお悩みをお聞かせいただき、
            最適なプランをご提案いたします。
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* LINE CTA - Most Prominent */}
          <div className="bg-[#06C755] text-white rounded-xl p-6 md:p-8 mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="h-6 w-6" />
              <span className="text-lg font-bold">LINE公式アカウント</span>
            </div>
            <p className="text-white/90 mb-5 text-sm md:text-base">
              LINEで24時間受付中！ 最速で返信します
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#06C755] hover:bg-white/90 text-base md:text-lg px-10 py-7 shadow-lg font-bold"
            >
              <a href="https://line.me/R/ti/p/%40zxw6487t" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                LINEで予約する（24時間受付・最速返信）
              </a>
            </Button>
          </div>

          {/* Email Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
