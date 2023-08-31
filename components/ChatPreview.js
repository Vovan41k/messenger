const ChatPreview = ({
    name,
    message,
    avatar,
    time
}) => {
    return `
<div class="chat-item d-flex pl-3 pr-0 pt-3 pb-3">
<div class="w-100">
<div class="d-flex pl-0">
<img class="rounded-circle shadow avatar-sm mr-3" src="${avatar}">
<div>
<p class="margin-auto fw-400 text-dark-75">${name}</p>
<div class="d-flex flex-row mt-1">
  <span>
    <div class="svg15 double-check"></div>
  </span>
  <span class="message-shortcut margin-auto text-muted fs-13 ml-1 mr-4">${message}</span>
</div>
</div>
</div>
</div>
<div class="flex-shrink-0 margin-auto pl-2 pr-3">
<div class="d-flex flex-column">
<p class="text-muted text-right fs-13 mb-2">${time}</p>
<div class="text-right d-flex flex-row">
<span>
  <div class="svg18 pinned"></div>
</span>
<i class="text-muted la la-angle-down ml-1 fs-15"></i>
</div>
</div>
</div>
</div>
    `
}