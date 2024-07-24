import './Content.style.scss'
import GithubIcon from '~/assets/icons/github.svg'

function Content() {
  const openPopup = () => {
    chrome.runtime.sendMessage({ action: 'openPopup' }, (response) => {
      console.log(response)
    })
  }
  return (
    <div onClick={openPopup} data-content>
      <GithubIcon className="h-full w-full" />
    </div>
  )
}
export default Content
