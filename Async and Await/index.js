const posts = [ 
    { title : 'one', Description: 'first post' },
    { title : 'two', Description: 'second post' }
]


function getPosts() {
     setTimeout(function() {
        let output = ''
        posts.forEach(post => {
           output += `${post.title} `
        })
        document.body.innerHTML = output
        console.log(output)
     }, 1000)
}


function createPosts(post, callback){
    setTimeout(function(){
        posts.push(post)
        callback()
    }, 3000)
}

 
 createPosts({ title: 'three' }, getPosts())
