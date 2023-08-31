const MessageMenu = ()=>{
    return `
    <div class="chat-search pl-3 pr-3">
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Write a message">
      <div class="input-group-append prepend-white">
        <span class="input-group-text pl-2 pr-2">
          <i class="chat-upload-trigger fs-19 bi bi-file-earmark-plus ml-2 mr-2"></i>
          <i class="fs-19 bi bi-emoji-smile ml-2 mr-2"></i>
          <i class="fs-19 bi bi-camera ml-2 mr-2"></i>
          <i class="fs-19 bi bi-cursor ml-2 mr-2"></i>
          <div class="chat-upload">
            <div class="d-flex flex-column">
              <div class="p-2">
                <button type="button" class="btn btn-secondary btn-md btn-icon btn-circle btn-blushing">
                  <i class="fs-15 bi bi-camera"></i>
                </button>
              </div>
              <div class="p-2">
                <button type="button" class="btn btn-success btn-md btn-icon btn-circle btn-blushing">
                  <i class="fs-15 bi bi-file-earmark-plus"></i>
                </button>
              </div>
              <div class="p-2">
                <button type="button" class="btn btn-warning btn-md btn-icon btn-circle btn-blushing">
                  <i class="fs-15 bi bi-person"></i>
                </button>
              </div>
              <div class="p-2">
                <button type="button" class="btn btn-danger btn-md btn-icon btn-circle btn-blushing">
                  <i class="fs-15 bi bi-card-image"></i>
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>`
}