
type IOverlay = {
  isLoading: boolean
}
const Overlay = (props: IOverlay) => (
  <div className={'loading-overlay' + (props.isLoading ? ' is-active' : '')}>
  <img src="/assets/images/toma-logo-original.png" alt="" />
</div>

);

export { Overlay };
