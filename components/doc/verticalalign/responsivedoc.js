import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div>
    <span class="vertical-align-baseline">baseline</span>
    <span class="vertical-align-bottom md:vertical-align-top">top</span>
    <span class="vertical-align-middle">middle</span>
    <span class="vertical-align-top md:vertical-align-bottom">bottom</span>
    <span class="vertical-align-text-top">text-top</span>
    <span class="vertical-align-text-bottom">text-bottom</span>
    <span class="vertical-align-sub">sub</span>
    <span class="vertical-align-super">super</span>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container">
        <div class="surface-overlay border-round border-1 shadow-1 p-5 py-0 m-3">
            <span class="vertical-align-baseline">baseline</span>
            <span class="vertical-align-bottom md:vertical-align-top">top</span>
            <span class="vertical-align-middle">middle</span>
            <span class="vertical-align-top md:vertical-align-bottom">bottom</span>
            <span class="vertical-align-text-top">text-top</span>
            <span class="vertical-align-text-bottom">text-bottom</span>
            <span class="vertical-align-sub">sub</span>
            <span class="vertical-align-super">super</span>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:vertical-align-bottom</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container">
                    <div className="surface-overlay border-round border-1 shadow-1 p-5 py-0 m-3">
                        <span className="vertical-align-baseline">baseline</span>
                        <span className="vertical-align-bottom md:vertical-align-top">top</span>
                        <span className="vertical-align-middle">middle</span>
                        <span className="vertical-align-top md:vertical-align-bottom">bottom</span>
                        <span className="vertical-align-text-top">text-top</span>
                        <span className="vertical-align-text-bottom">text-bottom</span>
                        <span className="vertical-align-sub">sub</span>
                        <span className="vertical-align-super">super</span>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
