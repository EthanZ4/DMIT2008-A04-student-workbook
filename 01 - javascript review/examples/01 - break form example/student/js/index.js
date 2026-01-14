// 1. select topic & new topic form
let topicList = document.querySelector(".topics-list")
let newTopicForm = document.querySelector(".new-topic-form")

// 2. add event listener, stop default formm submit event (would reload page)
newTopicForm.addEventListener('submit', (event) => { 
    
    event.preventDefault()
    
    // 3. grab input element & extract/store value
    let topicInput = event.target.elements['new-topic']
    let newTopic = topicInput.value
    console.log(newTopic)
    
    // 4. validation - check for empty, use bootstrap classes for user feedback
    if (newTopic === "") {
        topicInput.classList.add('is-invalid')
    } else {
        topicInput.classList.remove('is-invalid')
    }
})