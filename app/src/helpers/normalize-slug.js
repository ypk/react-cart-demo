const NormalizeSlug = (slug) => {
    return slug.split("-").map(word => word.toLowerCase()).join("-");
}

export default NormalizeSlug;