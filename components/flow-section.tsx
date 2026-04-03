'use client'

import { MessageCircle, Users, CreditCard, Dumbbell, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: '無料カウンセリングのお申し込み',
    description: 'LINEで24時間受付中！お問い合わせフォームからもお申し込みいただけます。',
  },
  {
    number: 2,
    icon: Users,
    title: 'ご来店・カウンセリング・体験トレーニング',
    description: '確かな可能性を実感できたら理想実現のチャンス！体験トレーニングは5,500円→2,750円でご利用いただけます。',
  },
  {
    number: 3,
    icon: CreditCard,
    title: '入会手続・料金支払',
    description: 'カウンセリング終了後、入会希望のお客様にご案内します。強引な勧誘は一切ございません。',
  },
  {
    number: 4,
    icon: Dumbbell,
    title: 'トレーニングスタート',
    description: '日々の変化を実感できるからモチベーションが上がります。いつでも次回が楽しみに！',
  },
  {
    number: 5,
    icon: Trophy,
    title: 'トータルサポート',
    description: '実証済みのノウハウと最新理論できめ細かくアドバイス！コース終了後はご自身でもメンテナンス可能に。',
  },
]

export function FlowSection() {
  return (
    <section id="flow" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Flow
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            ご利用の流れ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            完全予約制でマンツーマンのパーソナルトレーニング。
            あなたのための完全オーダーメイドメニューでトータルサポートいたします。
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-[calc(100%-2rem)] bg-border md:left-8" />
              )}
              
              <div className="flex gap-4 md:gap-6 pb-8">
                {/* Number circle */}
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-lg md:text-xl font-bold">{step.number}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-4 md:p-5 border border-border shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-sm md:text-base">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Button
            asChild
            size="lg"
            className="bg-[#06C755] text-white hover:bg-[#06C755]/90 text-base px-8 py-6"
          >
            <a href="https://line.me/R/ti/p/%40cbg0709r" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              LINEで予約する（24時間受付・最速返信）
            </a>
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            または{' '}
            <Link href="#contact" className="text-accent hover:underline">
              メールフォームから予約
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
