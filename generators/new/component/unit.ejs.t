---
to: "src/components/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.unit.ts"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
%>// Libraries
import Vue from 'Vue';

// Utilities
import { createLocalVue, shallowMount, Wrapper } from '@vue/test-utils';

// Test Target
import <%= importName %> from './<%= fileName %>.vue';

const localVue = createLocalVue();

describe('@components/<%= fileName %>', () => {
  let wrapper: Wrapper<Vue>;
  beforeAll(() => {
    wrapper = shallowMount(<%= importName %>, { localVue });
  });

  it('matches snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
})
