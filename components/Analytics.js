import Script from 'next/script'

export default function Analytics() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
      <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', ´${process.env.NEXT_PUBLIC_ANALYTICS}´);
      `}
      </Script>
    </div>
  )
}