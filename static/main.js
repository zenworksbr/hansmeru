function getTranslationStrings(query) {
        if (query != 'en' && query != 'pt') {
                query = 'en'
        }
        const lang = document.createElement('script')
        lang.src = `/static/${query}.js`
        lang.type = 'text/javascript'
        document.getElementsByTagName('head')[0].appendChild(lang)
}

function generatePFP(link) {
        const parent = document.getElementsByClassName('main_info')[0]
        pfp = document.createElement('img')
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

        parent.appendChild(userInfo)
}

function generateLinksTitle(about_links) {

        const title = document.createElement('h4')
        title.innerText = about_links
}

function generateLinkElement(data) {

        const linkItem = document.createElement('div')
        const linkRedir = document.createElement('a')
        linkRedir.href = data.link
        linkItem.appendChild(linkRedir)
        const linkPic = document.createElement('div')
        linkPic.class = 'image_container'
        const pic = document.createElement('img')
        pic.src = data.img_url
        pic.class = 'link_img'
        const linkContent = document.createElement('div')
        linkPic.class = 'link_container'
        linkRedir.appendChild(linkPic)
        linkRedir.appendChild(linkContent)

        return linkItem
}

function generateSpotifyFrame(link) {
        const frame = document.createElement('iframe')
        frame.class = "link_item"
        frame.src = link
        frame.width = "100%"
        frame.height = "380"
        frame.frameborder="0"
        frame.allowfullscreen="" 
        frame.allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"

        return frame
}

function generateLinks(links) {
        const parent = document.getElementsByClassName('links')[0]
        for (const [title, data] of Object.entries(links)) {
                if (title == 'spotify') {
                        parent.appendChild(generateSpotifyFrame(data))
                }
                parent.appendChild(generateLinkElement(data))
        }
}