const SideBar = () => {
  const chats = [{
    name:'Julia',
    message:'Hello world!',
    avatar:'https://user-images.githubusercontent.com/35243461/168796884-ee3aafb6-8083-48ec-9cfb-51b95eae08fe.jpg',
    time:'12:44'
},
{
  name:'Helen',
  message:'Hi world!',
  avatar:'https://user-images.githubusercontent.com/35243461/168796877-f6c8819a-5d6e-4b2a-bd56-04963639239b.jpg',
  time:'15:56'
}]
    return `
<div class="col-md-4 col-12 card-stacked">
      <div class="card shadow-line mb-3 chat">
        <div class="chat-user-detail">
          <div class="p-3 chat-header">
            <div class="w-100">
              <div class="d-flex pl-0">
                <div class="d-flex flex-row mt-1 mb-1">
                  <span class="margin-auto mr-2">
                    <a href="#" class="user-undetail-trigger btn btn-sm btn-icon btn-light active text-dark ml-2">
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </a>
                  </span>
                  <p class="margin-auto fw-400 text-dark-75">Profile</p>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 chat-user-info">
            <div class="card-body text-center">
              <a href="#!">
                <img src="https://user-images.githubusercontent.com/35243461/168796876-2e363a49-b32c-4218-b5a3-ce12493af69e.jpg" class="rounded-circle img-fluid shadow avatar-xxl">
              </a>
              <div class="pt-4 text-center animate4">
                <h6 class="fw-300 mb-1">Quan Albert</h6>
                <p class="text-muted">Web Developer</p>
                <div class="mt-4">
                  <a href="#" class="btn btn-light-skype btn-icon btn-circle btn-sm btn-shadow mr-2"><i class="bx bxl-skype"></i></a>
                  <a href="#" class="btn btn-light-facebook btn-icon btn-circle btn-sm btn-shadow mr-2"><i class="bx bxl-facebook"></i></a>
                  <a href="#" class="btn btn-light-twitter btn-icon btn-circle btn-sm btn-shadow mr-2"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="btn btn-light-instagram btn-icon btn-circle btn-sm btn-shadow mr-2"><i class="bx bxl-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-3 chat-header">
          <div class="d-flex">
            <div class="w-100 d-flex pl-0">
              <img class="user-detail-trigger rounded-circle shadow avatar-sm mr-3 chat-profile-picture" src="https://user-images.githubusercontent.com/35243461/168796876-2e363a49-b32c-4218-b5a3-ce12493af69e.jpg" />
            </div>
            <div class="flex-shrink-0 margin-auto">
              <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </a>
              <a href="#" class="btn btn-sm btn-icon btn-light active text-dark ml-2">
                <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
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
        </div>
        <div class="chat-search pl-3 pr-3">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search a conversation">
            <div class="input-group-append prepend-white">
              <span class="input-group-text pl-2 pr-2">
                <i class="fs-17 las la-search drop-shadow"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="archived-messages d-flex p-3">
          <div class="w-100">
            <div class="d-flex pl-0">
              <div class="d-flex flex-row mt-1">
                <span class="margin-auto mr-2">
                  <div class="svg15 archived"></div>
                </span>
                <p class="margin-auto fw-400 text-dark-75">Archived</p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-user-panel">
          <div class="pb-3 d-flex flex-column navigation-mobile pagination-scrool chat-user-scroll">
          ${chats.map((chat)=>{
            return ChatPreview(chat)
          }).join('')}
          </div>
        </div>
      </div>
    </div>
`
}