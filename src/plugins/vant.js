// 按需全局引入 vant组件
import Vue from 'vue'
import { PasswordInput, NumberKeyboard,Area,AddressEdit, AddressList,GoodsAction, GoodsActionIcon, GoodsActionButton,Popup, SubmitBar, Stepper, Checkbox, CheckboxGroup, Card, SwipeCell, Tab, Tabs, Search, Sticky, Button, List, Cell, Tabbar, TabbarItem, Swipe, SwipeItem, NavBar, Grid, GridItem, Icon } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe).use(SwipeItem);
Vue.use(NavBar);
Vue.use(Grid).use(GridItem);
Vue.use(Icon);
Vue.use(Sticky);
Vue.use(Search);
Vue.use(Tab).use(Tabs);
Vue.use(SwipeCell);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Popup);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(Area);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
