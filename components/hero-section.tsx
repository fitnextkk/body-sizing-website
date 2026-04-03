import Link from 'next/link'
import { MapPin, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
      
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span>JR難波駅 徒歩2分 | なんばエリア</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
              <span className="block">美しいカラダを</span>
              <span className="block">手に入れた。</span>
              <span className="block text-accent">強いココロも手に入れた。</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
              大阪・難波の完全予約制パーソナルジム。
              30〜50代のダイエット・ボディメイクに特化した、
              あなただけのトレーニングプログラムをご提案します。
            </p>

            {/* Primary CTA - Large and prominent */}
            <div className="flex flex-col gap-3 mb-6">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto text-base md:text-lg px-8 py-7 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              >
                <Link href="#contact">
                  無料カウンセリングを今すぐ予約する
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto text-base px-8 py-6"
              >
                <Link href="#results">
                  ビフォーアフターを見る
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                完全予約制
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                完全個室
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                手ぶらOK
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Before</span>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/before-1.jpg"
                      alt="トレーニング前の体型"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">After</span>
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg ring-2 ring-accent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/after-1.jpg"
                      alt="トレーニング後の体型"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-card px-5 py-2.5 rounded-full shadow-lg border border-border">
                <p className="text-sm font-medium whitespace-nowrap">
                  <span className="text-accent font-bold">-12kg</span>
                  <span className="text-muted-foreground ml-2">4ヶ月で達成</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign Banner */}
        <div className="mt-12 md:mt-16 bg-primary text-primary-foreground rounded-xl p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm opacity-80 mb-1">春のボディメイク応援キャンペーン | 先着10名様</p>
              <p className="text-lg md:text-xl font-bold">
                当日入会で入会金・体験料 <span className="text-accent">無料</span>
              </p>
              <p className="text-xs md:text-sm opacity-70 mt-1">2026年5月30日まで</p>
            </div>
            <Button 
              asChild 
              size="lg" 
              className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="#contact">
                今すぐ予約する
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
