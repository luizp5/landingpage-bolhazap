import React from 'react';
import { Button } from '@/components/ui/button';
import { Share2, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { useShareConfig } from '@/hooks/useSEO';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  showWhatsApp?: boolean;
  showSocialMedia?: boolean;
  variant?: 'default' | 'compact' | 'floating';
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  description,
  url,
  showWhatsApp = true,
  showSocialMedia = true,
  variant = 'default',
  className = ''
}) => {
  const { shareOnWhatsApp, shareOnSocial } = useShareConfig();

  const handleWhatsAppShare = () => {
    const shareText = title || document.title;
    const shareDescription = description ? ` - ${description}` : '';
    shareOnWhatsApp(`${shareText}${shareDescription}`, url);
  };

  const handleSocialShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    shareOnSocial(platform, url, title);
  };

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <Share2 className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground mr-2">Compartilhar:</span>

        {showWhatsApp && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleWhatsAppShare}
            className="h-8 w-8 p-0 hover:bg-secondary/10"
          >
            <MessageCircle className="h-4 w-4 text-secondary" />
          </Button>
        )}

        {showSocialMedia && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialShare('facebook')}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              <Facebook className="h-4 w-4 text-primary" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialShare('twitter')}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              <Twitter className="h-4 w-4 text-primary" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialShare('linkedin')}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              <Linkedin className="h-4 w-4 text-primary" />
            </Button>
          </>
        )}
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 ${className}`}>
        {showWhatsApp && (
          <Button
            variant="default"
            size="sm"
            onClick={handleWhatsAppShare}
            className="h-10 w-10 p-0 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        )}

        {showSocialMedia && (
          <>
            <Button
              variant="default"
              size="sm"
              onClick={() => handleSocialShare('facebook')}
              className="h-10 w-10 p-0 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            >
              <Facebook className="h-5 w-5" />
            </Button>

            <Button
              variant="default"
              size="sm"
              onClick={() => handleSocialShare('twitter')}
              className="h-10 w-10 p-0 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
            >
              <Twitter className="h-5 w-5" />
            </Button>
          </>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 sm:mb-0">
        <Share2 className="h-4 w-4" />
        <span>Compartilhe esta página:</span>
      </div>

      <div className="flex gap-2">
        {showWhatsApp && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppShare}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4 text-secondary" />
            WhatsApp
          </Button>
        )}

        {showSocialMedia && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialShare('facebook')}
              className="flex items-center gap-2"
            >
              <Facebook className="h-4 w-4 text-primary" />
              Facebook
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialShare('twitter')}
              className="flex items-center gap-2"
            >
              <Twitter className="h-4 w-4 text-primary" />
              Twitter
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSocialShare('linkedin')}
              className="flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              LinkedIn
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShareButtons;