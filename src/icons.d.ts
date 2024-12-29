// work around for typescript to recognize svg files as modules
// import iconClock from '~icons/pixelarticons/clock'

declare module '~icons/*' {
  const component: any;
  export default component;
}
