import '../assets/styles/talinwind.css'
import './Content.style.scss'
import GithubIcon from '~/assets/icons/github.svg'
const Content = () => {
  const openPopup = () => {
    chrome.runtime.sendMessage({ action: 'openPopup' }, (response) => {
      console.log(response)
    })
  }
  return (
    <div onClick={openPopup} data-content>
      <GithubIcon className={'w-full h-full'} />
    </div>
  )
}
export default Content
