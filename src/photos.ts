// export const photos = Array.from({length: 202}, (_, index) => ({
//   img: `./gallery/image${index + 1}.jpg`,
//   alt: `Image${index + 1}`
// }));

// // Fisher-Yates Shuffle Function
// const shuffleArray = <T>(array: T[]): T[] => {
//   for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1)); // Random index
//       // Swap elements
//       [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };


// Array of photos in random order created manually
export const shuffledPhotos = [
  {
      "img": "./gallery/image100.jpg",
      "alt": "Image100"
  },
  {
      "img": "./gallery/image78.jpg",
      "alt": "Image78"
  },
  {
      "img": "./gallery/image112.jpg",
      "alt": "Image112"
  },
  {
      "img": "./gallery/image195.jpg",
      "alt": "Image195"
  },
  {
      "img": "./gallery/image119.jpg",
      "alt": "Image119"
  },
  {
      "img": "./gallery/image1.jpg",
      "alt": "Image1"
  },
  {
      "img": "./gallery/image158.jpg",
      "alt": "Image158"
  },
  {
      "img": "./gallery/image52.jpg",
      "alt": "Image52"
  },
  {
    "img": "./gallery/P1188348.jpg",
    "alt": "ImageH1"
  },
  {
      "img": "./gallery/image150.jpg",
      "alt": "Image150"
  },
  {
      "img": "./gallery/image138.jpg",
      "alt": "Image138"
  },
  {
      "img": "./gallery/image83.jpg",
      "alt": "Image83"
  },
  {
      "img": "./gallery/image108.jpg",
      "alt": "Image108"
  },
  {
      "img": "./gallery/image61.jpg",
      "alt": "Image61"
  },
  {
      "img": "./gallery/image177.jpg",
      "alt": "Image177"
  },
  {
      "img": "./gallery/image167.jpg",
      "alt": "Image167"
  },
  {
      "img": "./gallery/image180.jpg",
      "alt": "Image180"
  },
  {
      "img": "./gallery/image135.jpg",
      "alt": "Image135"
  },
  {
      "img": "./gallery/image170.jpg",
      "alt": "Image170"
  },
  {
    "img": "./gallery/P1188510.jpg",
    "alt": "ImageH2"
  },
  {
      "img": "./gallery/image73.jpg",
      "alt": "Image73"
  },
  {
      "img": "./gallery/image128.jpg",
      "alt": "Image128"
  },
  {
      "img": "./gallery/image99.jpg",
      "alt": "Image99"
  },
  {
      "img": "./gallery/image149.jpg",
      "alt": "Image149"
  },
  {
      "img": "./gallery/image75.jpg",
      "alt": "Image75"
  },
  {
      "img": "./gallery/image164.jpg",
      "alt": "Image164"
  },
  {
      "img": "./gallery/image187.jpg",
      "alt": "Image187"
  },
  {
      "img": "./gallery/image141.jpg",
      "alt": "Image141"
  },
  {
      "img": "./gallery/image201.jpg",
      "alt": "Image201"
  },
  {
      "img": "./gallery/image47.jpg",
      "alt": "Image47"
  },
  {
      "img": "./gallery/image137.jpg",
      "alt": "Image137"
  },
  {
      "img": "./gallery/image71.jpg",
      "alt": "Image71"
  },
  {
      "img": "./gallery/image80.jpg",
      "alt": "Image80"
  },
  {
    "img": "./gallery/P1188320.jpg",
    "alt": "ImageH3"
  },
  {
      "img": "./gallery/image69.jpg",
      "alt": "Image69"
  },
  {
      "img": "./gallery/image101.jpg",
      "alt": "Image101"
  },
  {
      "img": "./gallery/image20.jpg",
      "alt": "Image20"
  },
  {
      "img": "./gallery/image191.jpg",
      "alt": "Image191"
  },
  {
    "img": "./gallery/P1188333.jpg",
    "alt": "ImageH4"
  },
  {
      "img": "./gallery/image102.jpg",
      "alt": "Image102"
  },
  {
      "img": "./gallery/image5.jpg",
      "alt": "Image5"
  },
  {
      "img": "./gallery/image111.jpg",
      "alt": "Image111"
  },
  {
      "img": "./gallery/image162.jpg",
      "alt": "Image162"
  },
  {
    "img": "./gallery/P1188350.jpg",
    "alt": "ImageH5"
  },
  {
      "img": "./gallery/image151.jpg",
      "alt": "Image151"
  },
  {
      "img": "./gallery/image143.jpg",
      "alt": "Image143"
  },
  {
      "img": "./gallery/image31.jpg",
      "alt": "Image31"
  },
  {
      "img": "./gallery/image21.jpg",
      "alt": "Image21"
  },
  {
      "img": "./gallery/image8.jpg",
      "alt": "Image8"
  },
  {
    "img": "./gallery/P1188361.jpg",
    "alt": "ImageH6"
  },
  {
      "img": "./gallery/image74.jpg",
      "alt": "Image74"
  },
  {
      "img": "./gallery/image29.jpg",
      "alt": "Image29"
  },
  {
    "img": "./gallery/P1188373.jpg",
    "alt": "ImageH7"
  },
  {
    "img": "./gallery/P1188386.jpg",
    "alt": "ImageH8"
  },
  {
      "img": "./gallery/image174.jpg",
      "alt": "Image174"
  },
  {
      "img": "./gallery/image130.jpg",
      "alt": "Image130"
  },
  {
      "img": "./gallery/image40.jpg",
      "alt": "Image40"
  },
  {
      "img": "./gallery/image36.jpg",
      "alt": "Image36"
  },
  {
    "img": "./gallery/P1188422.jpg",
    "alt": "ImageH9"
  },
  {
      "img": "./gallery/image115.jpg",
      "alt": "Image115"
  },
  {
      "img": "./gallery/image10.jpg",
      "alt": "Image10"
  },
  {
    "img": "./gallery/P1188439.jpg",
    "alt": "ImageH10"
  },
  {
      "img": "./gallery/image103.jpg",
      "alt": "Image103"
  },
  {
      "img": "./gallery/image132.jpg",
      "alt": "Image132"
  },
  {
    "img": "./gallery/P1188466.jpg",
    "alt": "ImageH11"
  },
  {
      "img": "./gallery/image184.jpg",
      "alt": "Image184"
  },
  {
      "img": "./gallery/image4.jpg",
      "alt": "Image4"
  },
  {
      "img": "./gallery/image39.jpg",
      "alt": "Image39"
  },
  {
    "img": "./gallery/P1188472.jpg",
    "alt": "ImageH12"
  },
  {
      "img": "./gallery/image50.jpg",
      "alt": "Image50"
  },
  {
      "img": "./gallery/image142.jpg",
      "alt": "Image142"
  },
  {
    "img": "./gallery/P1188579.jpg",
    "alt": "ImageH13"
  },
  {
      "img": "./gallery/image107.jpg",
      "alt": "Image107"
  },
  {
      "img": "./gallery/image157.jpg",
      "alt": "Image157"
  },
  {
    "img": "./gallery/P1188581.jpg",
    "alt": "ImageH14"
  },
  {
    "img": "./gallery/P1188582.jpg",
    "alt": "ImageH15"
  },
  {
      "img": "./gallery/image118.jpg",
      "alt": "Image118"
  },
  {
      "img": "./gallery/image28.jpg",
      "alt": "Image28"
  },
  {
      "img": "./gallery/image19.jpg",
      "alt": "Image19"
  },
  {
      "img": "./gallery/image163.jpg",
      "alt": "Image163"
  },
  {
      "img": "./gallery/image24.jpg",
      "alt": "Image24"
  },
  {
      "img": "./gallery/image117.jpg",
      "alt": "Image117"
  },
  {
      "img": "./gallery/image185.jpg",
      "alt": "Image185"
  },
  {
      "img": "./gallery/image11.jpg",
      "alt": "Image11"
  },
  {
      "img": "./gallery/image53.jpg",
      "alt": "Image53"
  },
  {
      "img": "./gallery/image189.jpg",
      "alt": "Image189"
  },
  {
      "img": "./gallery/image196.jpg",
      "alt": "Image196"
  },
  {
      "img": "./gallery/image85.jpg",
      "alt": "Image85"
  },
  {
      "img": "./gallery/image66.jpg",
      "alt": "Image66"
  },
  {
      "img": "./gallery/image62.jpg",
      "alt": "Image62"
  },
  {
      "img": "./gallery/image173.jpg",
      "alt": "Image173"
  },
  {
      "img": "./gallery/image169.jpg",
      "alt": "Image169"
  },
  {
      "img": "./gallery/image16.jpg",
      "alt": "Image16"
  },
  {
      "img": "./gallery/image200.jpg",
      "alt": "Image200"
  },
  {
      "img": "./gallery/image84.jpg",
      "alt": "Image84"
  },
  {
      "img": "./gallery/image72.jpg",
      "alt": "Image72"
  },
  {
      "img": "./gallery/image60.jpg",
      "alt": "Image60"
  },
  {
      "img": "./gallery/image25.jpg",
      "alt": "Image25"
  },
  {
      "img": "./gallery/image181.jpg",
      "alt": "Image181"
  },
  {
      "img": "./gallery/image6.jpg",
      "alt": "Image6"
  },
  {
      "img": "./gallery/image197.jpg",
      "alt": "Image197"
  },
  {
      "img": "./gallery/image88.jpg",
      "alt": "Image88"
  },
  {
      "img": "./gallery/image89.jpg",
      "alt": "Image89"
  },
  {
      "img": "./gallery/image126.jpg",
      "alt": "Image126"
  },
  {
      "img": "./gallery/image161.jpg",
      "alt": "Image161"
  },
  {
      "img": "./gallery/image17.jpg",
      "alt": "Image17"
  },
  {
      "img": "./gallery/image176.jpg",
      "alt": "Image176"
  },
  {
      "img": "./gallery/image68.jpg",
      "alt": "Image68"
  },
  {
      "img": "./gallery/image95.jpg",
      "alt": "Image95"
  },
  {
      "img": "./gallery/image136.jpg",
      "alt": "Image136"
  },
  {
      "img": "./gallery/image27.jpg",
      "alt": "Image27"
  },
  {
      "img": "./gallery/image144.jpg",
      "alt": "Image144"
  },
  {
      "img": "./gallery/image67.jpg",
      "alt": "Image67"
  },
  {
      "img": "./gallery/image156.jpg",
      "alt": "Image156"
  },
  {
      "img": "./gallery/image86.jpg",
      "alt": "Image86"
  },
  {
      "img": "./gallery/image125.jpg",
      "alt": "Image125"
  },
  {
      "img": "./gallery/image35.jpg",
      "alt": "Image35"
  },
  {
      "img": "./gallery/image79.jpg",
      "alt": "Image79"
  },
  {
      "img": "./gallery/image93.jpg",
      "alt": "Image93"
  },
  {
      "img": "./gallery/image63.jpg",
      "alt": "Image63"
  },
  {
      "img": "./gallery/image166.jpg",
      "alt": "Image166"
  },
  {
      "img": "./gallery/image114.jpg",
      "alt": "Image114"
  },
  {
      "img": "./gallery/image38.jpg",
      "alt": "Image38"
  },
  {
      "img": "./gallery/image64.jpg",
      "alt": "Image64"
  },
  {
      "img": "./gallery/image106.jpg",
      "alt": "Image106"
  },
  {
      "img": "./gallery/image96.jpg",
      "alt": "Image96"
  },
  {
      "img": "./gallery/image123.jpg",
      "alt": "Image123"
  },
  {
      "img": "./gallery/image56.jpg",
      "alt": "Image56"
  },
  {
      "img": "./gallery/image110.jpg",
      "alt": "Image110"
  },
  {
      "img": "./gallery/image46.jpg",
      "alt": "Image46"
  },
  {
      "img": "./gallery/image76.jpg",
      "alt": "Image76"
  },
  {
      "img": "./gallery/image154.jpg",
      "alt": "Image154"
  },
  {
      "img": "./gallery/image12.jpg",
      "alt": "Image12"
  },
  {
      "img": "./gallery/image32.jpg",
      "alt": "Image32"
  },
  {
      "img": "./gallery/image82.jpg",
      "alt": "Image82"
  },
  {
      "img": "./gallery/image98.jpg",
      "alt": "Image98"
  },
  {
      "img": "./gallery/image97.jpg",
      "alt": "Image97"
  },
  {
      "img": "./gallery/image134.jpg",
      "alt": "Image134"
  },
  {
      "img": "./gallery/image146.jpg",
      "alt": "Image146"
  },
  {
      "img": "./gallery/image186.jpg",
      "alt": "Image186"
  },
  {
      "img": "./gallery/image188.jpg",
      "alt": "Image188"
  },
  {
      "img": "./gallery/image148.jpg",
      "alt": "Image148"
  },
  {
      "img": "./gallery/image171.jpg",
      "alt": "Image171"
  },
  {
      "img": "./gallery/image175.jpg",
      "alt": "Image175"
  },
  {
      "img": "./gallery/image192.jpg",
      "alt": "Image192"
  },
  {
      "img": "./gallery/image190.jpg",
      "alt": "Image190"
  },
  {
      "img": "./gallery/image22.jpg",
      "alt": "Image22"
  },
  {
      "img": "./gallery/image145.jpg",
      "alt": "Image145"
  },
  {
      "img": "./gallery/image51.jpg",
      "alt": "Image51"
  },
  {
      "img": "./gallery/image65.jpg",
      "alt": "Image65"
  },
  {
      "img": "./gallery/image14.jpg",
      "alt": "Image14"
  },
  {
      "img": "./gallery/image44.jpg",
      "alt": "Image44"
  },
  {
      "img": "./gallery/image30.jpg",
      "alt": "Image30"
  },
  {
      "img": "./gallery/image178.jpg",
      "alt": "Image178"
  },
  {
      "img": "./gallery/image104.jpg",
      "alt": "Image104"
  },
  {
      "img": "./gallery/image165.jpg",
      "alt": "Image165"
  },
  {
      "img": "./gallery/image127.jpg",
      "alt": "Image127"
  },
  {
      "img": "./gallery/image87.jpg",
      "alt": "Image87"
  },
  {
      "img": "./gallery/image77.jpg",
      "alt": "Image77"
  },
  {
      "img": "./gallery/image153.jpg",
      "alt": "Image153"
  },
  {
      "img": "./gallery/image58.jpg",
      "alt": "Image58"
  },
  {
      "img": "./gallery/image90.jpg",
      "alt": "Image90"
  },
  {
      "img": "./gallery/image122.jpg",
      "alt": "Image122"
  },
  {
      "img": "./gallery/image129.jpg",
      "alt": "Image129"
  },
  {
      "img": "./gallery/image49.jpg",
      "alt": "Image49"
  },
  {
      "img": "./gallery/image168.jpg",
      "alt": "Image168"
  },
  {
      "img": "./gallery/image3.jpg",
      "alt": "Image3"
  },
  {
      "img": "./gallery/image34.jpg",
      "alt": "Image34"
  },
  {
      "img": "./gallery/image70.jpg",
      "alt": "Image70"
  },
  {
      "img": "./gallery/image109.jpg",
      "alt": "Image109"
  },
  {
      "img": "./gallery/image116.jpg",
      "alt": "Image116"
  },
  {
      "img": "./gallery/image57.jpg",
      "alt": "Image57"
  },
  {
      "img": "./gallery/image41.jpg",
      "alt": "Image41"
  },
  {
      "img": "./gallery/image7.jpg",
      "alt": "Image7"
  },
  {
      "img": "./gallery/image94.jpg",
      "alt": "Image94"
  },
  {
      "img": "./gallery/image55.jpg",
      "alt": "Image55"
  },
  {
      "img": "./gallery/image13.jpg",
      "alt": "Image13"
  },
  {
      "img": "./gallery/image23.jpg",
      "alt": "Image23"
  },
  {
      "img": "./gallery/image139.jpg",
      "alt": "Image139"
  },
  {
      "img": "./gallery/image9.jpg",
      "alt": "Image9"
  },
  {
      "img": "./gallery/image160.jpg",
      "alt": "Image160"
  },
  {
      "img": "./gallery/image147.jpg",
      "alt": "Image147"
  },
  {
      "img": "./gallery/image18.jpg",
      "alt": "Image18"
  },
  {
      "img": "./gallery/image193.jpg",
      "alt": "Image193"
  },
  {
      "img": "./gallery/image202.jpg",
      "alt": "Image202"
  },
  {
      "img": "./gallery/image121.jpg",
      "alt": "Image121"
  },
  {
      "img": "./gallery/image124.jpg",
      "alt": "Image124"
  },
  {
      "img": "./gallery/image152.jpg",
      "alt": "Image152"
  },
  {
      "img": "./gallery/image105.jpg",
      "alt": "Image105"
  },
  {
      "img": "./gallery/image198.jpg",
      "alt": "Image198"
  },
  {
      "img": "./gallery/image48.jpg",
      "alt": "Image48"
  },
  {
      "img": "./gallery/image159.jpg",
      "alt": "Image159"
  },
  {
      "img": "./gallery/image194.jpg",
      "alt": "Image194"
  },
  {
      "img": "./gallery/image179.jpg",
      "alt": "Image179"
  },
  {
      "img": "./gallery/image182.jpg",
      "alt": "Image182"
  },
  {
      "img": "./gallery/image155.jpg",
      "alt": "Image155"
  },
  {
      "img": "./gallery/image92.jpg",
      "alt": "Image92"
  },
  {
      "img": "./gallery/image133.jpg",
      "alt": "Image133"
  },
  {
      "img": "./gallery/image37.jpg",
      "alt": "Image37"
  },
  {
      "img": "./gallery/image33.jpg",
      "alt": "Image33"
  },
  {
      "img": "./gallery/image140.jpg",
      "alt": "Image140"
  },
  {
      "img": "./gallery/image26.jpg",
      "alt": "Image26"
  },
  {
      "img": "./gallery/image91.jpg",
      "alt": "Image91"
  },
  {
      "img": "./gallery/image113.jpg",
      "alt": "Image113"
  },
  {
      "img": "./gallery/image120.jpg",
      "alt": "Image120"
  },
  {
      "img": "./gallery/image59.jpg",
      "alt": "Image59"
  },
  {
      "img": "./gallery/image15.jpg",
      "alt": "Image15"
  },
  {
      "img": "./gallery/image131.jpg",
      "alt": "Image131"
  },
  {
      "img": "./gallery/image183.jpg",
      "alt": "Image183"
  },
  {
      "img": "./gallery/image43.jpg",
      "alt": "Image43"
  },
  {
      "img": "./gallery/image172.jpg",
      "alt": "Image172"
  },
  {
      "img": "./gallery/image2.jpg",
      "alt": "Image2"
  },
  {
      "img": "./gallery/image42.jpg",
      "alt": "Image42"
  },
  {
      "img": "./gallery/image199.jpg",
      "alt": "Image199"
  },
  {
      "img": "./gallery/image81.jpg",
      "alt": "Image81"
  },
  {
      "img": "./gallery/image45.jpg",
      "alt": "Image45"
  },
  {
      "img": "./gallery/image54.jpg",
      "alt": "Image54"
  }
]