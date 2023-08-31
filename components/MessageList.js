const MessageList = () => {
  const messages = [
    {
      text: 'Hello',
      time: '6:32'
    },
    {
      text: 'Hi',
      time: '8:56',
      fromMe: false
    },
    {
      text: 'Helo',
      time: '10:14',
      fromMe: false
    }]
  return `
    <div class="d-flex flex-row mb-3 navigation-mobile scrollable-chat-panel chat-panel-scroll">
    <div class="w-100 p-3">
      <div class="svg36 loader-animate3 horizontal-margin-auto mb-2"></div>
      <div class="text-center letter-space drop-shadow text-uppercase fs-12 w-100 mb-3">Today</div>
      ${messages.map((message)=>{
        return Message(message)
      }).join('')}
    </div>
  </div>`
}