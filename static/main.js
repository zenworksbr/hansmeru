function generatePFP(link) {
        const parent = document.getElementsByClassName('main_info')[0]
        pfp = document.createElement('img')
        pfp.setAttribute('class', 'pfp')
        pfp.src = link

        parent.appendChild(pfp)
}

function generateUserInfo(name, title) {
        const parent = document.getElementsByClassName('main_info')[0]
        const userInfo = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.innerText = name
        const h4 = document.createElement('h4')
        h4.innerText = title
        userInfo.appendChild(h3)
        userInfo.appendChild(h4)
        console.log(userInfo)

        parent.appendChild(userInfo)
}

function generateLinksTitle(about_links) {

        const title = document.createElement('h4')
        title.innerText = about_links
}

function generateLinkElement(title, data) {

        const linkItem = document.createElement('div')
        linkItem.setAttribute('class', 'link_item') 
        const linkRedir = document.createElement('a')
        linkRedir.href = data.link
        linkRedir.target = '_blank'
        linkItem.appendChild(linkRedir)
        const linkPic = document.createElement('div')
        linkPic.setAttribute('class', 'image_container')
        const pic = document.createElement('img')
        pic.src = data.img_url
        pic.setAttribute('class', 'link_img')
        linkPic.appendChild(pic)
        const linkContent = document.createElement('div')
        linkContent.setAttribute('class', 'link_container')
        linkContent.innerText = title
        
        linkRedir.appendChild(linkPic)
        linkRedir.appendChild(linkContent)

        return linkItem
}

function generateSpotifyFrame(link) {
        const div = document.createElement('div')
        div.setAttribute('class', 'link_item')
        const frame = document.createElement('iframe')
        frame.class = "link_item"
        frame.src = link
        frame.width = "100%"
        frame.height = "380"
        frame.frameborder="0"
        frame.allowfullscreen="" 
        frame.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

        div.appendChild(frame)
        return frame
}

function generateLinks(links) {
        const parent = document.getElementsByClassName('links')[0]
        for (const [title, data] of Object.entries(links)) {
                if (title == 'spotify') {
                        parent.appendChild(generateSpotifyFrame(data))
                        continue
                }
                parent.appendChild(generateLinkElement(title, data))
        }
}