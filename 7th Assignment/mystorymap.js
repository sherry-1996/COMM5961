// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2001-2017",
      text: {
        headline: "All the Way to the South- My Educational Journey",
        text: "<p>Born in a small town of Liao Ning, I've spent more than 80% of my life being a student. So learning about my educational journey is a great way to understand me. It's interesting to find out that I'm actually following a path all the way to the south for further education. And I will show you that in the following pages. </p>"
      },
      media: {
        url: "https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?h=350&auto=compress&cs=tinysrgb",
        credit: "Eductaion",
        caption: "About me"
      }
    }, {
      date: "2001",
      text: {
        headline: "Gou Bangzi Primary and Gou Bangzi Middle School",
        text: "<p>When I was a kid, there were only one primary school and two middle schools in our town so there were not so many choices for me. But I did spend a lot of wonderful time there. Sadly, those two schoools I went got demolished by government just a few years ago.</p>"
      },
      location: {
        name: "Gou Bangzi",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 41.3758,
        lon: 121.7815,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pic.baike.soso.com/ugc/baikepic2/0/20160715115830-478941187.jpg/800",
        type: 		"image",
        credit: "Gou Bangzi Town",
        caption: "My primary and middle school."
      }
    }, {
      date: "2010",
      text: {
        headline: "Panjin Senior Middle School",
        text: "<p>After senior high school entrance examination, I went to Panjin Senior Middle School which is a liitle far away from my home. Panjin Senior Middle School is a municiple key school of Panjin established in 1948, formly known as Pangshan United High School. </p> "
      },
      location: {
        name: "Panjin Senior Middle School",
        lat: 41.1624,
        lon: 122.0600,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://news.lnd.com.cn/attachement/jpg/site1/20110601/003018a116820f4f8c1815.jpg",
        credit: "Panjin Senior Middle School",
        caption: "My high shcool."
      }


    },{
      date: "2013",
      text: {
        headline: "Peking University",
        text: "<p>After college entrance examination, I went to Peking University to study advertising in School of Journalism and Communication. Peking University is a comprehensive and national key university. Founded in 1898, Peking University was originally known as the Imperial University of Peking. It was the first national university covering comprehensive disciplines in China, and has been a leading institution of higher education in China since its establishment. It also served as the highest administration for education at the beginning of its founding. </p>"
      },
      location: {
        name: "Peking University",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 39.9869,
        lon: 116.3059,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://pic.baike.soso.com/ugc/baikepic2/0/ori-20141103113941-616128912.jpg/800",
        type:     "image",
        credit: "Peking University",
        caption: "School of Jornalism and Communication ."
      }
    },{
      date: "2017",
      text: {
        headline: "Chinese University of Hong Kong",
        text: "<p>Now, I'm a student majoring in new media in School of Jornalism and Communication, CUHK. Founded in 1963, CUHK is a university that is as firmly rooted in Chinese culture as it is positioned in modern civilized society.After half a century of growth and development, it has become a comprehensive research university, a regional leader with a global reputation. </p> "
      },
      location: {
        name: "CUHK New Asia College",
        lat: 22.4210,
        lon: 114.2090,
        zoom: 16,
        line: true
      },
      media: {
        url: "http://img001.21cnimg.com/photos/album/20170903/m320/2558B4587C9F9C1BCCA53EDE3B2C7844.jpeg",
        credit: "CUHK",
        caption: "CUHK School of Journalism and Communication."
      }   
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}