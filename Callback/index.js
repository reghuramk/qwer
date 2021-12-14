const posts = [ 
    { title : 'one', Description: 'first post' },
    { title : 'two', Description: 'second post' }
]

// CALLBACK

// function getPosts() {
//      setTimeout(function() {
//         let output = ''
//         posts.forEach(post => {
//            output += `<li>${post.title}</li> `
//         })
//         document.body.innerHTML = output
//      }, 1000)
// }


// function createPosts(post){
//     setTimeout(function(){
//         posts.push(post)
//     }, 3000)
// }

// getPosts()
// createPosts({ title: 'three' })



// function getPosts() {
//      setTimeout(function() {
//         let output = ''
//         posts.forEach(post => {
//            output += `<li>${post.title}</li> `
//         })
//         document.body.innerHTML = output
//      }, 1000)
// }


// function createPosts(post, callback){
//     setTimeout(function(){
//         posts.push(post)
//         callback()
//     }, 3000)
// }
 
// createPosts({ title: 'three' }, getPosts)


//CALLBACK HELL

// function getPosts() {

//      setTimeout(function() {

//         const error = false

//         if(error) {

//             handleError(error)

//          } else {
//             let output = ''
//             posts.forEach(post => {
//                output += `<li>${post.title}</li> `
//             })
//             document.body.innerHTML = output
//             {
//                 if (error) {

//                     handleError(error)

//                 } else {
//                     const output = { title: 'four' }
//                     posts.push(output)
//                     document.body.innerHTML = output 
//                     {
//                         if(error) {
//                             handleError(error)
//                         } else {
//                             let output = `<li> another item added </li>`
//                             posts.forEach(post => {
//                             output += `<li>${post.title}</li> `
//                             })
//                             document.body.innerHTML = output 
//                         }
//                     }
//                 }
//             }
//          }
     
//      }, 1000)
// }


// function createPosts(post, callback){
//     setTimeout(function(){
//         posts.push(post)
//         callback()
//     }, 3000)
// }
 
// createPosts({ title: 'three' }, getPosts)


//PROMISE

// function getPosts() {
//      setTimeout(function() {
//         let output = ''
//         posts.forEach(post => {
//            output += `<li>${post.title}</li> `
//         })
//         document.body.innerHTML = output
//      }, 1000)
// }


// function createPosts(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             posts.push(post)
           
//             const error = false
//             if(error){
//                 reject('error')
//             }else{
//                 resolve()
//             }

//         }, 3000)
//     } )
    
// }

createPosts({ title: 'three' })
.then((getPosts))