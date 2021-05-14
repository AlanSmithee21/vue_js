  const vm = new Vue({
    el: "#app",
    data: {
      inputType: 'ShoppingCenter',
      Img01: '',
      Img02: '',
      Name: '',
      Url: '',
      Description: '',
      postalCode: '',
      addressRegion: '',
      addressLocality: '',
      streetAddress: '',
      addressCountry: 'JP',
      GeoLatitude: '',
      GeoLongitude: '',
      CompanyUrl: '',
      Telephone: '',
      PriceRange: '',
      OpenHours: '',
      CloseHours: '',
      Monday: '',
      Tuesday: '',
      Wednesday: '',
      Thursday: '',
      Friday: '',
      Saturday: '',
      Sunday: '',
      items:[{"@type":'OpeningHoursSpecification',dayOfWeek:[],OpenHours:'',CloseHours: ''}]
    },
    methods: {
      add: function(){
        this.items.push({"@type":'OpeningHoursSpecification',dayOfWeek:[],OpenHours: '', CloseHours: ''});
      }
    }
  })

new ClipboardJS('.js-copy-btn');
