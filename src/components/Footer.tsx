export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Himanshu Gohil. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <span className="text-primary mx-1">♥</span>
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
