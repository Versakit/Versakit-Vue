import{N as t}from"./index.esm-DpKr9oCe.js";import"./iframe-az1hJU6t.js";const m={title:"Components/Carousel/Examples",component:t,tags:["autodocs"]},e={render:r=>({components:{Carousel:t},setup(){return{args:r,images:["https://picsum.photos/id/1018/800/400","https://picsum.photos/id/1015/800/400","https://picsum.photos/id/1019/800/400","https://picsum.photos/id/1016/800/400"]}},template:`
      <div class="h-96">
        <Carousel v-bind="args">
          <div v-for="(image, index) in images" :key="index" class="w-full h-full">
            <img :src="image" class="w-full h-full object-cover" :alt="'Image ' + (index + 1)" />
          </div>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,interval:5e3,effect:"fade"}},s={render:r=>({components:{Carousel:t},setup(){return{args:r,cards:[{title:"产品1",description:"这是产品1的描述信息",color:"bg-blue-100"},{title:"产品2",description:"这是产品2的描述信息",color:"bg-green-100"},{title:"产品3",description:"这是产品3的描述信息",color:"bg-yellow-100"},{title:"产品4",description:"这是产品4的描述信息",color:"bg-purple-100"}]}},template:`
      <div class="h-96">
        <Carousel v-bind="args">
          <div v-for="(card, index) in cards" :key="index" class="w-full h-full p-4">
            <div :class="['w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center p-8', card.color]">
              <h2 class="text-2xl font-bold mb-4">{{ card.title }}</h2>
              <p class="text-lg">{{ card.description }}</p>
            </div>
          </div>
        </Carousel>
      </div>
    `}),args:{autoplay:!0,interval:4e3}};var l,o,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      const images = ['https://picsum.photos/id/1018/800/400', 'https://picsum.photos/id/1015/800/400', 'https://picsum.photos/id/1019/800/400', 'https://picsum.photos/id/1016/800/400'];
      return {
        args,
        images
      };
    },
    template: \`
      <div class="h-96">
        <Carousel v-bind="args">
          <div v-for="(image, index) in images" :key="index" class="w-full h-full">
            <img :src="image" class="w-full h-full object-cover" :alt="'Image ' + (index + 1)" />
          </div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    interval: 5000,
    effect: 'fade'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,c,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Carousel
    },
    setup() {
      const cards = [{
        title: '产品1',
        description: '这是产品1的描述信息',
        color: 'bg-blue-100'
      }, {
        title: '产品2',
        description: '这是产品2的描述信息',
        color: 'bg-green-100'
      }, {
        title: '产品3',
        description: '这是产品3的描述信息',
        color: 'bg-yellow-100'
      }, {
        title: '产品4',
        description: '这是产品4的描述信息',
        color: 'bg-purple-100'
      }];
      return {
        args,
        cards
      };
    },
    template: \`
      <div class="h-96">
        <Carousel v-bind="args">
          <div v-for="(card, index) in cards" :key="index" class="w-full h-full p-4">
            <div :class="['w-full h-full rounded-lg shadow-lg flex flex-col justify-center items-center p-8', card.color]">
              <h2 class="text-2xl font-bold mb-4">{{ card.title }}</h2>
              <p class="text-lg">{{ card.description }}</p>
            </div>
          </div>
        </Carousel>
      </div>
    \`
  }),
  args: {
    autoplay: true,
    interval: 4000
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const g=["ImageCarousel","CardCarousel"];export{s as CardCarousel,e as ImageCarousel,g as __namedExportsOrder,m as default};
