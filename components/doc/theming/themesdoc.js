import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ThemesDoc(props) {
    const code = {
        basic: `:root {
    --text-color:#495057;
    --text-color-secondary:#6c757d;
    --primary-color:#2196F3;
    --primary-color-text:#ffffff;
    --font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    --surface-0:#ffffff;
    --surface-50:#FAFAFA;
    --surface-100:#F5F5F5;
    --surface-200:#EEEEEE;
    --surface-300:#E0E0E0;
    --surface-400:#BDBDBD;
    --surface-500:#9E9E9E;
    --surface-600:#757575;
    --surface-800:#424242;
    --surface-900:#212121;
    --surface-ground:#f8f9fa;
    --surface-section:#ffffff;
    --surface-card:#ffffff;
    --surface-overlay:#ffffff;
    --surface-border:#dee2e6;
    --content-padding:1rem;
    --inline-spacing:0.5rem;
    --border-radius:3px;
    --blue-50:#f4fafe;
    --blue-100:#cae6fc;
    --blue-200:#a0d2fa;
    --blue-300:#75bef8;
    --blue-400:#4baaf5;
    --blue-500:#2196f3;
    --blue-600:#1c80cf;
    --blue-700:#1769aa;
    --blue-800:#125386;
    --blue-900:#0d3c61;
    --green-50:#f6fbf6;
    --green-100:#d4ecd5;
    --green-200:#b2ddb4;
    --green-300:#90cd93;
    --green-400:#6ebe71;
    --green-500:#4caf50;
    --green-600:#419544;
    --green-700:#357b38;
    --green-800:#2a602c;
    --green-900:#1e4620;
    --yellow-50:#fffcf5;
    --yellow-100:#fef0cd;
    --yellow-200:#fde4a5;
    --yellow-300:#fdd87d;
    --yellow-400:#fccc55;
    --yellow-500:#fbc02d;
    --yellow-600:#d5a326;
    --yellow-700:#b08620;
    --yellow-800:#8a6a19;
    --yellow-900:#644d12;
    --cyan-50:#f2fcfd;
    --cyan-100:#c2eff5;
    --cyan-200:#91e2ed;
    --cyan-300:#61d5e4;
    --cyan-400:#30c9dc;
    --cyan-500:#00bcd4;
    --cyan-600:#00a0b4;
    --cyan-700:#008494;
    --cyan-800:#006775;
    --cyan-900:#004b55;
    --pink-50:#fef4f7;
    --pink-100:#fac9da;
    --pink-200:#f69ebc;
    --pink-300:#f1749e;
    --pink-400:#ed4981;
    --pink-500:#e91e63;
    --pink-600:#c61a54;
    --pink-700:#a31545;
    --pink-800:#801136;
    --pink-900:#5d0c28;
    --indigo-50:#f5f6fb;
    --indigo-100:#d1d5ed;
    --indigo-200:#acb4df;
    --indigo-300:#8893d1;
    --indigo-400:#6372c3;
    --indigo-500:#3f51b5;
    --indigo-600:#36459a;
    --indigo-700:#2c397f;
    --indigo-800:#232d64;
    --indigo-900:#192048;
    --teal-50:#f2faf9;
    --teal-100:#c2e6e2;
    --teal-200:#91d2cc;
    --teal-300:#61beb5;
    --teal-400:#30aa9f;
    --teal-500:#009688;
    --teal-600:#008074;
    --teal-700:#00695f;
    --teal-800:#00534b;
    --teal-900:#003c36;
    --orange-50:#fff8f2;
    --orange-100:#fde0c2;
    --orange-200:#fbc791;
    --orange-300:#f9ae61;
    --orange-400:#f79530;
    --orange-500:#f57c00;
    --orange-600:#d06900;
    --orange-700:#ac5700;
    --orange-800:#874400;
    --orange-900:#623200;
    --bluegray-50:#f7f9f9;
    --bluegray-100:#d9e0e3;
    --bluegray-200:#bbc7cd;
    --bluegray-300:#9caeb7;
    --bluegray-400:#7e96a1;
    --bluegray-500:#607d8b;
    --bluegray-600:#526a76;
    --bluegray-700:#435861;
    --bluegray-800:#35454c;
    --bluegray-900:#263238;
    --purple-50:#faf4fb;
    --purple-100:#e7cbec;
    --purple-200:#d4a2dd;
    --purple-300:#c279ce;
    --purple-400:#af50bf;
    --purple-500:#9c27b0;
    --purple-600:#852196;
    --purple-700:#6d1b7b;
    --purple-800:#561561;
    --purple-900:#3e1046;
    --gray-50:#FAFAFA;
    --gray-100:#F5F5F5;
    --gray-200:#EEEEEE;
    --gray-300:#E0E0E0;
    --gray-400:#BDBDBD;
    --gray-500:#9E9E9E;
    --gray-600:#757575;
    --gray-700:#616161;
    --gray-800:#424242;
    --gray-900:#212121;
    --red-50:#fff5f5;
    --red-100:#ffd1ce;
    --red-200:#ffada7;
    --red-300:#ff8980;
    --red-400:#ff6459;
    --red-500:#ff4032;
    --red-600:#d9362b;
    --red-700:#b32d23;
    --red-800:#8c231c;
    --red-900:#661a14;
    --primary-50:#f4fafe;
    --primary-100:#cae6fc;
    --primary-200:#a0d2fa;
    --primary-300:#75bef8;
    --primary-400:#4baaf5;
    --primary-500:#2196f3;
    --primary-600:#1c80cf;
    --primary-700:#1769aa;
    --primary-800:#125386;
    --primary-900:#0d3c61;
}        
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeFlex does not ship with a built-in color scheme by default as it is derived from the Prime UI library. In case you need to use it standalone without a Prime library, include one of the themes from the themes folder. A theme
                    consists of the following set of CSS variables that can be easily customized to build your own.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} style={{maxHeight:'500px'}} />
        </>
    );
}
