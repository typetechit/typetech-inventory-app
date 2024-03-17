export function Loading() {
    return <h2 className={`flex item-center gap-2`}>
        <span className={`inline-block animate-spin`}>🌀</span>
        <span className={`animate-pulse`}>Loading...</span>
    </h2>;
}
