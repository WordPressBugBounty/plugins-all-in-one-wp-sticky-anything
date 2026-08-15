export function showNotification($text) {
    Swal.fire({
        title: false,
        text: $text,
        icon: 'success',
        toast: true,
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false,
        position: 'top-end',
        customClass: {container: 'ai1wpsa-swal ai1wpsa-notification'},
    });
}

export function useMounted() {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted
}