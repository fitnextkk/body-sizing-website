import Link from 'next/link'
import { Gift, Clock, Sparkles, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CampaignSection() {
  return (
    <section id="campaign" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Special Campaign
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-3 mb-4 text-balance">
            春のボディメイク応援キャンペーン
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            新生活をきっかけに、理想のカラダづくりを始めませんか？
          </p>
        </div>

        {/* 緊急感バナー */}
        <div className="max-w-3xl mx-auto mb-6">
          <div className="bg-accent text-accent-foreground rounded-full py-2.5 px-6 flex items-center justify-center gap-2 text-sm md:text-base font-bold animate-pulse">
            <AlertCircle className="h-4 w-4 md:h-5 md:w-5" />
            <span>先着10名様限定 | 残りわずか</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-foreground/20">
            {/* カウンセリング当日入会 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">カウンセリング当日入会の場合</h3>
                <span className="ml-auto bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">最大38,500円お得</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                  <p className="text-sm text-primary-foreground/60 mb-1">入会金</p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-foreground/50 line-through text-sm">33,000円</span>
                    <span className="text-xl md:text-2xl font-bold text-accent">無料</span>
                  </p>
                </div>
                <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                  <p className="text-sm text-primary-foreground/60 mb-1">体験料金</p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-foreground/50 line-through text-sm">5,500円</span>
                    <span className="text-xl md:text-2xl font-bold text-accent">無料</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 後日入会 */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Gift className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">後日入会の場合</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                  <p className="text-sm text-primary-foreground/60 mb-1">入会金</p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-foreground/50 line-through text-sm">33,000円</span>
                    <span className="text-lg md:text-xl font-bold">11,000円</span>
                  </p>
                </div>
                <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10">
                  <p className="text-sm text-primary-foreground/60 mb-1">体験料金</p>
                  <p className="flex items-center gap-2">
                    <span className="text-primary-foreground/50 line-through text-sm">5,500円</span>
                    <span className="text-lg md:text-xl font-bold">2,750円</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 期限 */}
            <div className="flex items-center justify-center gap-2 text-sm md:text-base text-primary-foreground/80 mb-6 bg-primary-foreground/5 rounded-lg py-3 px-4">
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-accent" />
              <span>キャンペーン期限：<strong className="text-accent">2026年5月30日まで</strong></span>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-lg px-10 py-7 shadow-lg"
            >
              <Link href="#contact">
                無料カウンセリングを今すぐ予約する
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 max-w-2xl mx-auto">
          <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10 text-center">
            <p className="text-xl md:text-2xl font-bold text-accent mb-1">¥0</p>
            <p className="text-xs text-primary-foreground/70">無料カウンセリング</p>
          </div>
          <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10 text-center">
            <p className="text-xl md:text-2xl font-bold text-accent mb-1">完全個室</p>
            <p className="text-xs text-primary-foreground/70">プライベート空間</p>
          </div>
          <div className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10 text-center">
            <p className="text-xl md:text-2xl font-bold mb-1">月4回〜</p>
            <p className="text-xs text-primary-foreground/70">プラン選択可能</p>
          </div>
        </div>
      </div>
    </section>
  )
}
