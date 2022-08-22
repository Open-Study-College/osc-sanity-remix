import { Form } from '@remix-run/react';
import { useLoaderData, useLocation, useSubmit } from '@remix-run/react';
import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';

import { getColorScheme } from '~/cookie';
import type { LoaderFunction } from '@remix-run/server-runtime';
import FormToggle from '~/components/FormToggle';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { queryHomePage } from '~/models/sanity.server';

export const loader: LoaderFunction = async ({ request }) => {
    const colorScheme = await getColorScheme(request);

    const queryHome = await queryHomePage('home');

    const home = queryHome.Home;

    return json({ colorScheme, home });
};

export const meta: MetaFunction = ({ data }) => {
    const { title } = data.home?.seo ? data.home?.seo : data.home.store;

    return {
        title: `${title} | OSC Stack`,
        description: data.home?.seo?.description,
        image: data.home?.seo?.image?.url,
        'og:description': data.home?.seo?.description,
        'og:image': data.home?.seo?.image?.url
    };
};

export default function Index() {
    const props = useLoaderData() ?? undefined;
    const colorScheme = props ? props.colorScheme : undefined;
    const submit = useSubmit();
    const location = useLocation();
    return (
        <div>
            <h1>This is the index page</h1>
            <Form action="/logout" method="post">
                <button type="submit">Logout</button>
            </Form>
            {colorScheme && (
                <FormToggle
                    leftIcon={<MoonIcon color={'secondary'} margin={2} />}
                    rightIcon={<SunIcon color={'secondary'} margin={2} />}
                    isChecked={colorScheme === 'light' ? true : false}
                    onToggle={() => {
                        const formData = new FormData();
                        formData.set('pathname', location.pathname);
                        submit(formData, {
                            method: 'post',
                            action: '/actions/changeTheme'
                        });
                    }}
                    id="color-mode-toggle"
                />
            )}
        </div>
    );
}
