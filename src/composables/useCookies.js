import { ref, watch, computed } from 'vue';
import { useCookie } from 'vue-cookie-next';

const allowCookies = ref();

export default function useCookies(gtag) {
  const cookie = useCookie();
  if (cookie.isCookieAvailable('cookies_consent')) { 
    allowCookies.value = cookie.getCookie('cookies_consent') === 'true';
    gtag.optIn();
  } else {
    allowCookies.value = undefined;
  }

  watch(allowCookies, () => {
    if (allowCookies.value != undefined) {
      cookie.setCookie('cookies_consent', allowCookies.value.toString(), {
        expire: new Date(new Date().getFullYear(), 12, 31),
      });
     
      if (allowCookies.value) {
        gtag.optIn();
      } else {
        gtag.optOut();
      }
    }
  });

  const showBanner = computed(() => {
    return allowCookies.value === undefined;
  });

  const okClicked = () => (allowCookies.value = true);
  const cancelClicked = () => (allowCookies.value = false);

  return {
    allowCookies,
    showBanner,
    okClicked,
    cancelClicked
  };
}