const ChatHeader = ()=>{
    return `
    <div class="p-3 chat-header">
    <div class="d-flex">
      <div class="w-100 d-flex pl-0">
        <img class="rounded-circle shadow avatar-sm mr-3 chat-profile-picture" src="https://user-images.githubusercontent.com/35243461/168796877-f6c8819a-5d6e-4b2a-bd56-04963639239b.jpg">
        <div class="mr-3">
          <a href="!#">
            <p class="fw-400 mb-0 text-dark-75">Beate Lemoine</p>
          </a>
          <p class="sub-caption text-muted text-small mb-0"><i class="la la-clock mr-1"></i>last seen today at 09:15 PM</p>
        </div>
      </div>
      <div class="flex-shrink-0 margin-auto">
        <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </a>
        <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </a>
        <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>
        <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
          <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </a>
      </div>
    </div>
  </div>`
}