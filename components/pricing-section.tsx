'use client'

import { Check, MessageCircle, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const includedServices = [
  'タオル類の無料貸し出し',
  'シューズのお預かり無料',
  'ミネラルウォーターの提供無料',
  'LINEでの食事指導・生活相談',
  'パーソナルトレーニング1回60分〜90分',
]

const pricingPlans = [
  {
    name: 'カウンセリング',
    description: '入会時必須・所要時間30分',
    originalPrice: null,
    price: '無料',
    note: 'お客様のトレーニング目的、コンディション等を伺い、目的達成までのアプローチを詳細にご案内いたします。',
  },
  {
    name: '体験トレーニング',
    description: '所要時間30分',
    originalPrice: '5,500円',
    price: '2,750円',
    note: 'カウンセリングの追加オプション。当店がご提案するトレーニングプログラムを実際に体験していただけます。',
  },
]

const mainPlans = [
  {
    name: '2ヶ月60分 短期集中プログラム',
    badge: '人気No.1',
    sessions: '16回 / 週2回・2ヶ月',
    hasFood: true,
    plans: [
      { type: '基本プラン', original: '264,000円', price: '158,400円' },
      { type: 'DAYプラン', original: '228,800円', price: '140,800円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', original: '211,200円', price: '123,200円', note: 'お一人様あたり' },
    ],
    enrollment: { original: '33,000円', price: '11,000円' },
  },
  {
    name: '1ヶ月60分 短期集中プログラム',
    badge: null,
    sessions: '8回 / 週2回・1ヶ月',
    hasFood: true,
    plans: [
      { type: '基本プラン', original: '140,800円', price: '88,000円' },
      { type: 'DAYプラン', original: '123,200円', price: '79,200円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', original: '114,400円', price: '70,400円', note: 'お一人様あたり' },
    ],
    enrollment: { original: '33,000円', price: '11,000円' },
  },
]

// 60分継続プログラム
const continuationPrograms60 = [
  {
    name: '60分継続プログラム（8回）',
    sessions: '8回',
    validity: '有効期限：3ヶ月',
    plans: [
      { type: '基本プラン', price: '79,200円' },
      { type: 'DAYプラン', price: '70,400円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', price: '61,600円', note: 'お一人様あたり' },
    ],
  },
  {
    name: '60分継続プログラム（4回）',
    sessions: '4回',
    validity: '有効期限：2ヶ月',
    plans: [
      { type: '基本プラン', price: '44,000円' },
      { type: 'DAYプラン', price: '39,600円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', price: '35,200円', note: 'お一人様あたり' },
    ],
  },
]

// 90分プログラム
const programs90 = [
  {
    name: '2ヶ月90分 短期集中プログラム',
    sessions: '16回 / 週2回・2ヶ月',
    hasFood: true,
    plans: [
      { type: '基本プラン', original: '396,000円', price: '237,600円' },
      { type: 'DAYプラン', original: '343,200円', price: '211,200円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', original: '316,800円', price: '184,800円', note: 'お一人様あたり' },
    ],
    enrollment: { original: '33,000円', price: '11,000円' },
  },
  {
    name: '1ヶ月90分 短期集中プログラム',
    sessions: '8回 / 週2回・1ヶ月',
    hasFood: true,
    plans: [
      { type: '基本プラン', original: '211,200円', price: '132,000円' },
      { type: 'DAYプラン', original: '184,800円', price: '118,800円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', original: '171,600円', price: '105,600円', note: 'お一人様あたり' },
    ],
    enrollment: { original: '33,000円', price: '11,000円' },
  },
  {
    name: '90分継続プログラム（8回）',
    sessions: '8回',
    validity: '有効期限：3ヶ月',
    plans: [
      { type: '基本プラン', price: '118,800円' },
      { type: 'DAYプラン', price: '105,600円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', price: '92,400円', note: 'お一人様あたり' },
    ],
  },
  {
    name: '90分継続プログラム（4回）',
    sessions: '4回',
    validity: '有効期限：2ヶ月',
    plans: [
      { type: '基本プラン', price: '66,000円' },
      { type: 'DAYプラン', price: '59,400円', note: '平日11:00-18:00' },
      { type: 'ペアプラン', price: '52,800円', note: 'お一人様あたり' },
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Price
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            料金プラン
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            正しいトレーニングフォームから食事の方法・管理まで、
            あなたのための完全オーダーメイドメニューでトータルサポート！
          </p>
        </div>

        {/* Campaign Banner */}
        <div className="bg-accent text-accent-foreground rounded-xl p-4 md:p-6 text-center mb-10">
          <p className="text-sm mb-1">キャンペーン実施中</p>
          <p className="text-xl md:text-2xl font-bold">
            カウンセリング当日入会で入会金無料！
          </p>
        </div>

        {/* Included Services */}
        <div className="bg-card rounded-xl p-5 md:p-6 border border-border mb-10">
          <h3 className="font-semibold mb-4 text-center">各コース共通サービス</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {includedServices.map((service, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Entry Plans */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-card rounded-xl p-5 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{plan.name}</h4>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="text-right">
                  {plan.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through">{plan.originalPrice}</p>
                  )}
                  <p className="text-xl font-bold text-accent">{plan.price}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{plan.note}</p>
            </div>
          ))}
        </div>

        {/* 60分 Main Plans */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">60分プログラム</h3>
          <div className="space-y-6 mb-8">
            {mainPlans.map((plan, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="bg-primary text-primary-foreground p-4 md:p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-lg">{plan.name}</h4>
                        {plan.badge && (
                          <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                            {plan.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm opacity-80">{plan.sessions}</p>
                    </div>
                    {plan.hasFood && (
                      <span className="text-xs bg-primary-foreground/20 px-2 py-1 rounded">
                        食事管理指導付き
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">入会金</p>
                    <p>
                      <span className="text-muted-foreground line-through text-sm mr-2">
                        {plan.enrollment.original}
                      </span>
                      <span className="font-bold text-accent">{plan.enrollment.price}</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    {plan.plans.map((subPlan, subIndex) => (
                      <div key={subIndex} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div>
                          <span className="font-medium">{subPlan.type}</span>
                          {subPlan.note && (
                            <span className="text-xs text-muted-foreground ml-2">({subPlan.note})</span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground line-through mr-2">
                            {subPlan.original}
                          </span>
                          <span className="font-bold text-lg text-accent">{subPlan.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 60分継続プログラム */}
          <div className="bg-card rounded-xl border border-border p-5 md:p-6">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-5 h-5 text-accent" />
              <h4 className="font-bold text-lg">60分継続プログラム</h4>
              <Star className="w-5 h-5 text-accent" />
            </div>
            
            {/* Popular Badge */}
            <div className="bg-accent/10 border border-accent rounded-lg p-4 mb-6 text-center">
              <p className="text-accent font-bold text-lg">
                4人に3人のお客様が選ぶ人気プログラム
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                入会されたお客様の4人に3人が継続プログラムを利用されています
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {continuationPrograms60.map((program, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="mb-3">
                    <h5 className="font-semibold">{program.name}</h5>
                    <p className="text-sm text-muted-foreground">{program.sessions} / {program.validity}</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 font-medium">プラン</th>
                          <th className="text-right py-2 font-medium">料金</th>
                        </tr>
                      </thead>
                      <tbody>
                        {program.plans.map((plan, planIndex) => (
                          <tr key={planIndex} className="border-b border-border last:border-0">
                            <td className="py-2">
                              {plan.type}
                              {plan.note && (
                                <span className="block text-xs text-muted-foreground">{plan.note}</span>
                              )}
                            </td>
                            <td className="py-2 text-right font-bold text-accent">{plan.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              ※ 継続プログラムは短期集中プログラム終了後にご利用いただけます。入会金は不要です。
            </p>
          </div>
        </div>

        {/* 90分プログラム */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold">90分プログラム</h3>
            <p className="text-sm text-muted-foreground mt-2">
              60分プログラムの50%追加料金で、より充実した内容のトレーニングが可能です
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 md:p-6 mb-6">
            <h4 className="font-semibold text-center mb-4">60分 vs 90分 プログラム比較</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2">項目</th>
                    <th className="text-center py-2 px-2">60分</th>
                    <th className="text-center py-2 px-2">90分</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 px-2">トレーニング時間</td>
                    <td className="py-2 px-2 text-center">60分</td>
                    <td className="py-2 px-2 text-center font-semibold text-accent">90分（+50%）</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-2">種目数</td>
                    <td className="py-2 px-2 text-center">4〜6種目</td>
                    <td className="py-2 px-2 text-center font-semibold text-accent">6〜9種目</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 px-2">有酸素運動</td>
                    <td className="py-2 px-2 text-center">オプション</td>
                    <td className="py-2 px-2 text-center font-semibold text-accent">標準で組み込み可能</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">ストレッチ・ケア</td>
                    <td className="py-2 px-2 text-center">簡易</td>
                    <td className="py-2 px-2 text-center font-semibold text-accent">しっかり時間をかけて実施</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            {programs90.slice(0, 2).map((plan, index) => (
              <div key={index} className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="bg-secondary text-secondary-foreground p-4 md:p-5">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h4 className="font-bold text-lg">{plan.name}</h4>
                      <p className="text-sm opacity-80">{plan.sessions}</p>
                    </div>
                    {plan.hasFood && (
                      <span className="text-xs bg-secondary-foreground/20 px-2 py-1 rounded">
                        食事管理指導付き
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 md:p-5">
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-1">入会金</p>
                    <p>
                      <span className="text-muted-foreground line-through text-sm mr-2">
                        {plan.enrollment?.original}
                      </span>
                      <span className="font-bold text-accent">{plan.enrollment?.price}</span>
                    </p>
                  </div>
                  <div className="space-y-3">
                    {plan.plans.map((subPlan, subIndex) => (
                      <div key={subIndex} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                        <div>
                          <span className="font-medium">{subPlan.type}</span>
                          {subPlan.note && (
                            <span className="text-xs text-muted-foreground ml-2">({subPlan.note})</span>
                          )}
                        </div>
                        <div className="text-right">
                          {subPlan.original && (
                            <span className="text-sm text-muted-foreground line-through mr-2">
                              {subPlan.original}
                            </span>
                          )}
                          <span className="font-bold text-lg text-accent">{subPlan.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 90分継続プログラム */}
          <div className="bg-card rounded-xl border border-border p-5 md:p-6 mt-6">
            <h4 className="font-bold text-lg text-center mb-6">90分継続プログラム</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {programs90.slice(2).map((program, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="mb-3">
                    <h5 className="font-semibold">{program.name}</h5>
                    <p className="text-sm text-muted-foreground">{program.sessions} / {program.validity}</p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 font-medium">プラン</th>
                          <th className="text-right py-2 font-medium">料金</th>
                        </tr>
                      </thead>
                      <tbody>
                        {program.plans.map((plan, planIndex) => (
                          <tr key={planIndex} className="border-b border-border last:border-0">
                            <td className="py-2">
                              {plan.type}
                              {plan.note && (
                                <span className="block text-xs text-muted-foreground">{plan.note}</span>
                              )}
                            </td>
                            <td className="py-2 text-right font-bold text-accent">{plan.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pair Usage Notice */}
        <div className="bg-card rounded-xl border border-border p-5 md:p-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="bg-accent/10 rounded-full p-3 flex-shrink-0">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">ペアプランが特に好評です</h4>
              <p className="text-sm text-muted-foreground">
                当店はスペースが広く機材が充実しているため、ペアでご利用のお客様には特に高評価を頂いています。
                ご夫婦・カップル・お友達同士など、お二人でのトレーニングをお考えの方にはペアプランがおすすめです。
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mb-8">
          ※ 金額は全て税込みです。2ヶ月コースのお支払いは一括決済または2回分割を承ります。
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-[#06C755] text-white hover:bg-[#06C755]/90 text-base px-8 py-6"
          >
            <a href="https://line.me/R/ti/p/%40zxw6487t" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              まずは無料カウンセリングから
            </a>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            入会を前提としないご相談も承ります。強引な勧誘は一切ございません。
          </p>
        </div>
      </div>
    </section>
  )
}
