const Chat = () => {
  return `
    <div class="col-md-8 col-12 card-stacked">
    <div class="card shadow-line mb-3 chat chat-panel">
      ${ChatHeader()}
      ${MessageList()}
      ${MessageMenu()}
    </div>
  </div>`
}