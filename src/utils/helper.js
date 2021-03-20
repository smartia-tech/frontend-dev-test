export function allCoresSuccessfullyLanded (cores) {
    const core = cores[0]
    return core.landing_success === true ? "Yes" : "No";
}