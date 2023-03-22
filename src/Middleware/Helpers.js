

export function replaceNbsps(str) {
    var re = new RegExp(String.fromCharCode(160), "g");
    return str.replace(re, " ");
  }
  
  export function htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }


  export function dateToDDmmYYYY(str) {
    var pattern = /(\d{4})-(\d{2})-(\d{2})(T)(\d{2}:\d{2}:\d{2})+/g
    return  str.replace(pattern, '$3.$2.$1')


  }

  export async function getThumbnail(id) {
    const data =  fetch('http://markimarta.com/wp-json/wp/v2/media/' + id)
    .then((response) => response.json()) //2
    .then((response) => {
      return response.sizes.thumbnail.source_url
    });
    ;
    //const json =  data.json();
    //let img = json.media_details.sizes.thumbnail.source_url;

    return data;
  }


export const SiteMap = (lang, words) => {
  //Navigation
const items = [
    {
        key : 'item1',
        label: words.home,
        url: "/"

    },
    {
        key: 'item2',
        label: words.about,
        url: "/about"
    },
    {
        key: 'item3',
        label: words.experience,
        url: "/experience"
    },
    {
        key: 'item4',
        label: words.skills,
        url: "/skills"
    },
    {
        key: 'item5',
        label: words.blogs,
        url: "/blog"
    },
]

return items;

}