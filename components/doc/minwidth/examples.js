import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = `<div class="flex flex-wrap align-items-center justify-content-center">
    <div class="border-round bg-primary-100 w-12rem p-3 m-3">
        <div class="min-w-full border-round bg-primary-500 text-white font-bold p-3 flex align-items-center justify-content-center">min-w-full</div>
    </div>
</div>
`;

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center">
                    <div className="border-round bg-primary-100 w-12rem p-3 m-3">
                        <div className="min-w-full border-round bg-primary-500 text-white font-bold p-3 flex align-items-center justify-content-center">min-w-full</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
