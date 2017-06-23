
export const isMobile = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        console.log("IS MOBILE >>>>");
        return true;
    }

    return false

}