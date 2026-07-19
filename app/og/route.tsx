import { ImageResponse } from 'next/og'

export function GET(request: Request) {
  let url = new URL(request.url)
  let title = url.searchParams.get('title') || 'muhammadakfz'

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-black text-white">
        <div tw="flex flex-col items-start p-12 w-full">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {title}
          </h2>
          <p tw="text-lg text-neutral-400 mt-4">muhammadakfz.dev</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
