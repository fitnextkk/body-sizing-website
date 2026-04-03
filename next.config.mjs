/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // ローカル画像使用のため最適化を無効化
    unoptimized: true,
    // 警告抑制のためquality値を設定
    qualities: [70, 75, 80],
  },
}

export default nextConfig
