import { DescriptionStyle } from "./Description.style";

const Description = () => {
    return <DescriptionStyle
            initial={{
                marginTop: '60px',
                opacity: 0
            }}
            animate={{
                marginTop: '20px',
                opacity: 1
            }}
            transition={{
                delay:2,
                duration: 1
            }}
        >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id gravida diam, eu auctor neque. Cras non odio porttitor, gravida dui sed, accumsan ipsum.</p>
        <p>Quisque euismod mattis venenatis. In egestas laoreet sapien vitae pellentesque. Vestibulum malesuada, libero non sagittis gravida, nibh neque suscipit purus, vel auctor velit mi eget velit.</p>
        <p>Curabitur suscipit diam velit, sed bibendum nunc tempor vel. In fringilla venenatis libero sit amet tempor. Morbi dapibus vehicula dolor eget posuere. Donec consectetur maximus tortor, vitae aliquet neque volutpat non.</p>
        <p>Morbi commodo vestibulum orci, quis auctor ex congue in. Ut ac tortor elementum, tristique tellus quis, rutrum est.</p>
    </DescriptionStyle>
}

export default Description;