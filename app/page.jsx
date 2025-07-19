

'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '604ce269-bc71-4cd5-9964-5e9b7c1141a4',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '604ce269-bc71-4cd5-9964-5e9b7c1141a4',
        lazySocket: true,
        themeName: 'prism',
        botName: 'PlantPal AI',
        avatarUrl: 'https://i.imgur.com/OUkLi.gif',
        stylesheet: 'https://botpress.com/css/index.css',
        enableConversationDeletion: true,
        showPoweredBy: false,
        containerWidth: '100%',
        layoutWidth: '100%',
        hideWidget: true, // Hides the default bubble
        disableAnimations: false,
        enableTranscriptDownload: false,
        // Forces it to open automatically and full screen
        showCloseButton: false,
        openByDefault: true,
      })
    }
  }, [])

  return (
    <main style={{ height: '100vh', width: '100vw' }}>
      <div id="webchat" style={{ height: '100%', width: '100%' }} />
    </main>
  )
}

