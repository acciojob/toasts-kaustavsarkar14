//your JS code here. If required.
const add = document.getElementById("add-button")
const toasts = document.getElementById("toasts")
const msg = document.getElementById("message-content")
const cancellable = document.getElementById("cancelable")
const clear = document.getElementById("clear-button")
const successBtn = document.getElementById("success");
const cancelable = document.getElementById("cancelable");
const duration = document.getElementById("duration");

add.addEventListener('click',()=>{
	 const toast = document.createElement('div');
    toast.classList.add('toast', successBtn.checked ? 'success-toast' : 'error-toast');
    
    const message = document.createElement('p');
    message.classList.add('message');
    message.textContent = msg.value == '' ? (successBtn.checked ? "Success!" : "Error.") : msg.value;

    toast.appendChild(message);

    if (cancelable.checked) {
        const cancelButton = document.createElement('button');
        cancelButton.classList.add('cancel-button');
        cancelButton.textContent = 'X';
        cancelButton.addEventListener('click', () => removeToast(toast));
        toast.appendChild(cancelButton);
    }

    toasts.appendChild(toast);
	
    setTimeout(() => {
        toast.remove();
        console.log("removed");
    }, duration.value?duration.value:500);
})
clear.addEventListener('click',()=>{
	toasts.innerHTML = ``
})

function removeToast(closeBtn) {
	const toast = closeBtn.closest(".toast")
	toast.remove()
}