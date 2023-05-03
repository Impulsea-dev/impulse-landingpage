<template>
  <div
    class="lg:flex flex-wrap blog-posts lg:space-x-5 space-y-5 lg:space-y-0 rtl:space-x-reverse"
  >
 
    <div class="flex-1">
      <div class="grid grid-cols-1 gap-5">
        <Card :img="post1Img" :className="'dark:!bg-[#000000]'">
         
          <h5 class="card-title text-slate-900">
           
          </h5>
          <div
            class="card-text dark:text-slate-300 mt-4 space-y-4 leading-5 text-slate-600 text-sm border-b border-slate-100 dark:border-slate-700 pb-6"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing
              eli.
            </p>
            <p class="font-medium text-base">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ulla mco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehende rit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ulla mco laboris nisi
              ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehende rit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun ut labore et dolore magna aliqua. Ut enim
              ad minim veniam.
            </p>
          </div>
           
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Textarea from "@/components/Textarea";
import Textinput from "@/components/Textinput";
import post1Img from "@/assets/images/all-img/post-1.png";
import twitterImg from "@/assets/images/svg/tw.svg";
import facebookImg from "@/assets/images/svg/fb.svg";
import linkedInImg from "@/assets/images/svg/ln.svg";
import instagramImg from "@/assets/images/svg/ins.svg";
import comment1Img from "@/assets/images/post/c1.png";
import comment2Img from "@/assets/images/post/c2.png";
import comment3Img from "@/assets/images/post/c3.png";
export default {
  components: {
    Card,
    Button,
    Icon,
    Textinput,
    Textarea,
  },
  data() {
    return {
      post1Img:post1Img,
      socialImgs:{
        twitterImg:twitterImg,
        facebookImg:facebookImg,
        linkedInImg:linkedInImg,
        instagramImg:instagramImg
      },
      commentsImg:{
        comment1Img:comment1Img,
        comment2img:comment2Img,
        comment3Img:comment3Img,
      },
      tags: [
        {
          title: "Business",
          link: "#",
        },
        {
          title: "Consulting",
          link: "#",
        },
        {
          title: "Photographic",
          link: "#",
        },
        {
          title: "Investment",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.blog-posts {
  .image-box {
    @apply h-[248px];
  }
  .card {
    @apply h-auto;
  }
}
</style>
