# ImageModal Component

A reusable, accessible image modal component with smooth animations and keyboard support.

## Features

- 🖼️ **Full-screen image display** with proper aspect ratio preservation
- ⌨️ **Keyboard support** (Escape key to close)
- 🎯 **Click outside to close** functionality
- ♿ **Accessibility features** (ARIA labels, focus management)
- 🎨 **Smooth animations** using Framer Motion
- 📱 **Responsive design** that works on all screen sizes
- 🔒 **Prevents background scroll** when modal is open
- 🎛️ **Customizable** with various props

## Usage

### Basic Usage

```jsx
import ImageModal from "../common/ImageModal";
import useImageModal from "../../hooks/useImageModal";

const MyComponent = () => {
  const { imageModal, isModalOpen, openImageModal, closeImageModal } =
    useImageModal();

  const handleImageClick = (image, alt) => {
    openImageModal(image, alt);
  };

  return (
    <div>
      <img
        src="/path/to/image.jpg"
        alt="Description"
        onClick={() => handleImageClick("/path/to/image.jpg", "Description")}
        className="cursor-pointer"
      />

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeImageModal}
        image={imageModal?.image}
        alt={imageModal?.alt}
      />
    </div>
  );
};
```

### Advanced Usage with Custom Props

```jsx
<ImageModal
  isOpen={isModalOpen}
  onClose={closeImageModal}
  image={imageModal?.image}
  alt={imageModal?.alt}
  title="Custom Title"
  showCloseButton={true}
  showCaption={true}
  className="custom-modal-class"
  imageClassName="custom-image-class"
  captionClassName="custom-caption-class"
/>
```

## Props

| Prop               | Type       | Default | Description                                    |
| ------------------ | ---------- | ------- | ---------------------------------------------- |
| `isOpen`           | `boolean`  | -       | Controls modal visibility                      |
| `onClose`          | `function` | -       | Function called when modal should close        |
| `image`            | `string`   | -       | URL of the image to display                    |
| `alt`              | `string`   | -       | Alt text for the image                         |
| `title`            | `string`   | -       | Optional title (overrides alt text in caption) |
| `showCloseButton`  | `boolean`  | `true`  | Whether to show the close button               |
| `showCaption`      | `boolean`  | `true`  | Whether to show the image caption              |
| `className`        | `string`   | `""`    | Additional CSS classes for the modal container |
| `imageClassName`   | `string`   | `""`    | Additional CSS classes for the image           |
| `captionClassName` | `string`   | `""`    | Additional CSS classes for the caption         |

## useImageModal Hook

The `useImageModal` hook provides a clean way to manage image modal state:

```jsx
const {
  imageModal, // Current modal data { image, alt, title }
  isModalOpen, // Boolean indicating if modal is open
  openImageModal, // Function to open modal with image data
  closeImageModal, // Function to close modal
} = useImageModal();
```

## Accessibility

- **ARIA attributes**: Proper `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`
- **Keyboard navigation**: Escape key support
- **Focus management**: Prevents background interaction when open
- **Screen reader friendly**: Proper alt text and labels

## Examples

### Gallery Component

```jsx
const Gallery = ({ images }) => {
  const { imageModal, isModalOpen, openImageModal, closeImageModal } =
    useImageModal();

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          onClick={() => openImageModal(img.src, img.alt, img.title)}
          className="cursor-pointer hover:scale-105 transition-transform"
        />
      ))}

      <ImageModal
        isOpen={isModalOpen}
        onClose={closeImageModal}
        image={imageModal?.image}
        alt={imageModal?.alt}
        title={imageModal?.title}
      />
    </div>
  );
};
```

### Minimal Modal (No Caption)

```jsx
<ImageModal
  isOpen={isModalOpen}
  onClose={closeImageModal}
  image={imageModal?.image}
  alt={imageModal?.alt}
  showCaption={false}
/>
```

### Custom Styled Modal

```jsx
<ImageModal
  isOpen={isModalOpen}
  onClose={closeImageModal}
  image={imageModal?.image}
  alt={imageModal?.alt}
  className="bg-black/90"
  imageClassName="rounded-3xl"
  captionClassName="bg-white/90 text-black"
/>
```
