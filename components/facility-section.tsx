'use client'

import Image from 'next/image'
import { Dumbbell, Shirt, Droplets, SparklesIcon, MapPin } from 'lucide-react'

const facilities = [
  {
    image: '/images/facility-training.webp',
    title: 'トレーニングルーム',
    description: '豊富な器具を揃えた完全個室。他のお客様と顔を合わせることなく集中してトレーニングできます。',
  },
  {
    image: '/images/facility-changing.webp',
    title: '更衣室',
    description: '完全個室の清潔な更衣室。シューズのお預かりも無料で対応しております。',
  },
  {
    image: '/images/facility-washroom.webp',
    title: '洗面アメニティ',
    description: '清潔なシャワールームを完備。タオルも無料でご用意しております。',
  },
]

const amenities = [
  {
    icon: Shirt,
    title: 'タオル無料貸出',
    description: 'フェイスタオル・バスタオルを無料でご用意',
  },
  {
    icon: Dumbbell,
    title: 'シューズお預かり',
    description: '室内用シューズを無料でお預かりします',
  },
  {
    icon: Droplets,
    title: 'ミネラルウォーター',
    description: 'トレーニング中の水分補給は無料',
  },
  {
    icon: SparklesIcon,
    title: '完全個室',
    description: '他のお客様と顔を合わせない完全プライベート空間',
  },
]

export function FacilitySection() {
  return (
    <section id="facility" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Facility
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            施設・設備
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            一般的な完全個室ジムとは違い、豊富な器具を揃えたボディメイクに最適な環境をご用意。
            清潔なシャワールーム・更衣室も完備しています。
          </p>
        </div>

        {/* Facility Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
              <div className="relative aspect-[4/3]">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-card rounded-lg p-4 text-center border border-border">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                <amenity.icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="font-medium text-sm mb-1">{amenity.title}</h4>
              <p className="text-xs text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Access Info */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">アクセス</h3>
              <p className="text-sm text-muted-foreground">
                〒556-0022 大阪市浪速区桜川1-2-4 ZEN901
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                JR難波駅 徒歩2分
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                地下鉄なんば駅各線 徒歩4分前後
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                南海なんば駅 徒歩5分
              </p>
              <p className="flex items-center gap-2 mt-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/50"></span>
                お車の場合は付近にコインパーキングが多数ございます
              </p>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.5!2d135.495!3d34.662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM5JzQzLjIiTiAxMzXCsDI5JzQyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Body Sizing アクセスマップ"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
