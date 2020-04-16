import { Ref, ref } from '@vue/composition-api';

export class AppModel {
  public worked: Ref<string>;

  constructor() {
    this.worked = ref('compilation failed');
    if (SkyCourtApi.SimpleEnum.yes === 0) {
      this.worked.value = 'everything is fine, nothing to see here';
    }
  }
}
