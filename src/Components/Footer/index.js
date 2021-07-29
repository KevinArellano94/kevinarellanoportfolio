function Footer() {
    new Date().getFullYear();
    return (
        <div class="footer">
            <p>© {(new Date().getFullYear())} Kevin Arellano's Portfolio</p>
        </div>
    )
}

export default Footer;