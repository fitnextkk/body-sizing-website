'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Target, Users, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Target,
    title: '目標達成率97%',
    description: '科学的根拠に基づいたプログラムで、確実に結果を出します。',
  },
  {
    icon: Users,
    title: 'マンツーマン指導',
    description: '経験豊富なトレーナーがあなただけのプランを作成・サポート。',
  },
  {
    icon: Clock,
    title: '完全予約制',
    description: 'プライベート空間で周りの目を気にせずトレーニングに集中。',
  },
  {
    icon: Award,
    title: '食事指導付き',
    description: '無理のない食事改善で、リバウンドしにくい体づくり。',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">About</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-3 mb-4 text-balance">
            難波で選ばれる理由
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            なんば・心斎橋エリアからもアクセス抜群。
            30〜50代の方に特化したボディメイク・ダイエットプログラムで、
            あなたの理想を現実に。
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-4 md:p-5 rounded-xl border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <feature.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-1.5">{feature.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg bg-muted">
            <Image
              src="/images/trainer-chief.jpg"
              alt="チーフトレーナー 土屋広夢"
              fill
              className="object-cover rounded-xl"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-wider">
              Message
            </span>
            <h3 className="text-xl md:text-2xl mt-3 mb-4">
              チーフ・トレーナーより
            </h3>
            <div className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                アスレティックトレーナーや様々な資格を持ち、スポーツチームに帯同しての選手指導からデイサービスのお客様の機能改善まで幅広い活動を行なってきました。
              </p>
              <p>
                自分でもボディメイクを行なっており、実体験に裏付けられた最新の科学的知識をお客様にお伝えしています。
              </p>
              <p>
                難波・なんば・心斎橋エリアにお住まいの皆様の「変わりたい」という想いを、全力でサポートさせていただきます。
              </p>
            </div>
            <div className="mt-5 pt-5 border-t border-border">
              <p className="font-semibold text-lg">土屋 広夢</p>
              <p className="text-sm text-muted-foreground mt-1">チーフ・トレーナー</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                日本スポーツ協会公認アスレティックトレーナー<br />
                日本トレーニング指導者協会公認 JATI-ATI<br />
                TRX サスペンショントレーナー<br />
                CFSC Level 1 ファンクショナルトレーニング<br />
                ViPR LMT CONBINE 認定トレーナー<br />
                2019年 NPCJアスリートモデル Finalist
              </p>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="#contact">
                  無料カウンセリングを予約する
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
