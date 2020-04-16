import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

export function addI18nSupport(localVue: typeof Vue): void {
  // by adding this v-t mock directive, we can then test wrapper.element.innerText against
  // the language key that was set with the v-t directive on the component.
  localVue.directive('t', (el, key) => {
    el.innerHTML = key.value;
  });
}

export function SBtnText(sbtn: Wrapper<Vue>): string {
  const div = sbtn.find('.tlabel');
  return div?.text();
}

// export function QBtnDropDownText(btn: Wrapper<Vue>): string {
//   const divs = btn.findAll('div');
//   return divs.at(3)?.text();
// }
