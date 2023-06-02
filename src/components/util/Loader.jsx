export default function Loader({ styles }) {
    return (
        <svg viewBox='25 25 50 50' className={`loader ${styles}`}>
            <circle r='20' cy='50' cx='50' className='loader-inner' />
        </svg>
    )
}