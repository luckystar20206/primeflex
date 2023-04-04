import { Button } from 'primereact/button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AutoDoc(props) {
    const code = {
        basic: `<div>
    <div class="flex">
        <div>Prime</div>
        <div>Prime and PrimeFlex</div>
        <div>Lorem ipsum dolor sit amet</div>
    </div>
    <div class="flex">
        <div class="flex-auto">Prime</div>
        <div class="flex-auto">Prime and PrimeFlex</div>
        <div class="flex-auto">Lorem ipsum dolor sit amet</div>
    </div>
</div>
        `,
        expanded: `<div class="card">
    <div class="card-container green-container overflow-hidden">
        <div class="flex">
            <div class="flex align-items-center justify-content-center bg-green-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime</div>
            <div class="flex align-items-center justify-content-center bg-green-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
            <div class="flex align-items-center justify-content-center bg-green-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        </div>
        <div class="flex">
            <div class="flex-auto flex align-items-center justify-content-center bg-green-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime</div>
            <div class="flex-auto flex align-items-center justify-content-center bg-green-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
            <div class="flex-auto flex align-items-center justify-content-center bg-green-500 font-bold text-gray-900 m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sets grow and shrink to 1 to auto grow and shrink while keeping flex-basis to auto.</p>
            </DocSectionText>
            <div className="card">
                <div className="card-container green-container overflow-hidden">
                    <div className="flex">
                        <div className="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 px-5 py-3 border-round">Prime</div>
                        <div className="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                        <div className="flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 px-5 py-3 border-round">Lorem ipsum dolor sit amet</div>
                    </div>
                    <div className="flex">
                        <div className="flex-auto flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 px-5 py-3 border-round">Prime</div>
                        <div className="flex-auto flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 px-5 py-3 border-round">Prime and PrimeFlex</div>
                        <div className="flex-auto flex align-items-center justify-content-center bg-green-500 font-bold text-white m-2 px-5 py-3 border-round"> Lorem ipsum dolor sit amet</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
